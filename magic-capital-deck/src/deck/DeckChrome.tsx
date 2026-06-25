import { useMemo } from 'react'
import { slides } from './slides'
import { copy } from '../content/copy'
import { cn } from '../lib/cn'
import { ChevronLeft, ChevronRight, Grid, Expand, Question } from '../components/icons'

type Props = {
  index: number
  total: number
  step: number
  maxSteps: number
  act: string
  title: string
  bg: 'light' | 'dark'
  onPrev: () => void
  onNext: () => void
  onGo: (i: number) => void
  onOverview: () => void
  onHelp: () => void
  onFullscreen: () => void
}

type Seg = { act: string; start: number; count: number }

export function DeckChrome({
  index,
  total,
  step,
  maxSteps,
  act,
  title,
  bg,
  onPrev,
  onNext,
  onGo,
  onOverview,
  onHelp,
  onFullscreen,
}: Props) {
  const nav = copy.ui.nav
  // Oscuro-lujo: todas las slides son oscuras → la chrome siempre va con texto claro
  // y relleno dorado. (Se conserva `bg` por si vuelve una slide clara en el futuro.)
  const onDark = bg === 'dark'
  const labelColor = onDark ? 'text-ivory/70' : 'text-ivory/65'
  const segTrack = onDark ? 'bg-ivory/15' : 'bg-ivory/12'
  const segFill = 'bg-gold'

  // Fracción de avance de la slide actual: con pasos, el progreso del acto crece con cada →.
  const stepFrac = maxSteps > 0 ? step / maxSteps : 1

  // Segmentos por acto, derivados del registro de slides.
  const segs = useMemo<Seg[]>(() => {
    const out: Seg[] = []
    slides.forEach((s, i) => {
      const last = out[out.length - 1]
      if (last && last.act === s.act) last.count++
      else out.push({ act: s.act, start: i, count: 1 })
    })
    return out
  }, [])

  const atStart = index === 0
  const atEnd = index === total - 1

  // Botón circular lateral
  const sideBtn =
    'pointer-events-auto grid h-12 w-12 place-items-center rounded-full bg-charcoal/85 text-ivory text-xl shadow-xl ring-1 ring-white/10 backdrop-blur transition-all hover:bg-charcoal disabled:opacity-25 disabled:cursor-default'
  // Botón dentro de la pill
  const pillBtn =
    'flex items-center gap-2 rounded-full px-3 py-2 text-[13px] text-ivory/80 transition-colors hover:bg-white/10 hover:text-ivory disabled:opacity-30'

  return (
    <div className="pointer-events-none fixed inset-0 z-20">
      {/* Progreso segmentado por actos (clicable) */}
      <div className="absolute inset-x-0 top-0 flex gap-1 px-3 pt-2">
        {segs.map((seg) => {
          const frac = Math.max(0, Math.min(1, (index - seg.start + stepFrac) / seg.count))
          return (
            <button
              key={seg.start}
              onClick={() => onGo(seg.start)}
              title={seg.act}
              className={cn('pointer-events-auto group h-1.5 flex-1 overflow-hidden rounded-full', segTrack)}
              style={{ flexGrow: seg.count }}
            >
              <div
                className={cn('h-full rounded-full transition-[width] duration-500 ease-out', segFill)}
                style={{ width: `${frac * 100}%` }}
              />
            </button>
          )
        })}
      </div>

      {/* Flechas laterales grandes (siempre visibles) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <button className={sideBtn} onClick={onPrev} disabled={atStart} aria-label={nav.prev}>
          <ChevronLeft />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <button className={sideBtn} onClick={onNext} disabled={atEnd} aria-label={nav.next}>
          <ChevronRight />
        </button>
      </div>

      {/* Etiqueta de sección actual */}
      <div
        className={cn(
          'absolute inset-x-0 bottom-[76px] flex justify-center text-[12px]',
          labelColor,
        )}
      >
        <span className="uppercase tracking-[0.16em]">{act}</span>
        <span className="mx-2 opacity-40">·</span>
        <span>{title}</span>
      </div>

      {/* Indicador de sub-pasos (build) de la slide actual */}
      {maxSteps > 0 && (
        <div className="absolute inset-x-0 bottom-[110px] flex justify-center gap-1.5">
          {Array.from({ length: maxSteps }).map((_, i) => (
            <span
              key={i}
              className={cn(
                'h-1.5 w-1.5 rounded-full transition-all duration-300',
                i < step ? segFill : segTrack,
                i < step ? 'opacity-100' : 'opacity-60',
              )}
            />
          ))}
        </div>
      )}

      {/* Barra de controles (pill) siempre visible */}
      <div className="absolute inset-x-0 bottom-5 flex justify-center px-4">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full bg-charcoal/90 p-1.5 text-ivory shadow-xl ring-1 ring-white/10 backdrop-blur">
          <button className={pillBtn} onClick={onPrev} disabled={atStart}>
            <ChevronLeft />
            <span className="hidden sm:inline">{nav.prev}</span>
          </button>

          <span className="px-2 text-[13px] font-medium tabular-nums text-ivory/90">
            {String(index + 1).padStart(2, '0')}
            <span className="text-ivory/40"> / {total}</span>
          </span>

          <button
            className="flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-[13px] font-medium text-midnight transition-colors hover:bg-gold-bright disabled:opacity-30"
            onClick={onNext}
            disabled={atEnd}
          >
            <span className="hidden sm:inline">{nav.next}</span>
            <ChevronRight />
          </button>

          <span className="mx-1 h-6 w-px bg-white/10" />

          <button className={pillBtn} onClick={onOverview} aria-label={nav.index}>
            <Grid />
            <span className="hidden md:inline">{nav.index}</span>
          </button>
          <button className={pillBtn} onClick={onFullscreen} aria-label={nav.fullscreen}>
            <Expand />
          </button>
          <button className={pillBtn} onClick={onHelp} aria-label={nav.help}>
            <Question />
          </button>
        </div>
      </div>
    </div>
  )
}
