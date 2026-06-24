import { Reveal } from '../motion/Reveal'
import { cn } from '../../lib/cn'

type Step = { id: string; name: string; price: string }

const STEPS: Step[] = [
  { id: 'masterclass', name: 'Masterclass', price: 'Gratis' },
  { id: 'comunidad', name: 'Comunidad', price: '$27/mes' },
  { id: 'intensivo', name: 'Intensivo MAP-9', price: '$297' },
  { id: 'mentoria', name: 'Mentoría 1:1', price: '$3,997' },
]

/**
 * Mini-mapa del funnel: dónde encaja el paso actual, sin saltos forzados.
 * `current` resalta el nivel; sobrio, sin presión.
 */
export function FunnelMap({ current, tone = 'light' }: { current?: string; tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <Reveal>
      <ol className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-0">
        {STEPS.map((s, i) => {
          const active = s.id === current
          return (
            <li key={s.id} className="flex flex-1 items-center gap-2 sm:flex-col sm:gap-0">
              <div
                className={cn(
                  'w-full rounded-xl border px-4 py-3 text-center transition-colors',
                  active
                    ? 'border-olive/50 bg-olive/12'
                    : dark
                      ? 'border-white/10 bg-white/[0.03]'
                      : 'border-charcoal/10 bg-white/70',
                )}
              >
                <div
                  className={cn(
                    'text-[13px] font-semibold',
                    active ? (dark ? 'text-ivory' : 'text-petrol') : dark ? 'text-ivory/75' : 'text-charcoal/80',
                  )}
                >
                  {s.name}
                </div>
                <div className={cn('text-[12px]', dark ? 'text-ivory/65' : 'text-smoke')}>{s.price}</div>
              </div>
              {i < STEPS.length - 1 && (
                <span className={cn('shrink-0 px-1 sm:py-1', dark ? 'text-ivory/30' : 'text-smoke/60')} aria-hidden>
                  <span className="hidden sm:inline">↓</span>
                  <span className="sm:hidden">→</span>
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </Reveal>
  )
}
