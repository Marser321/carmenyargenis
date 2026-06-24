import type { ReactNode } from 'react'
import { cn } from '../lib/cn'
import { Spotlight } from './Spotlight'
import { AuroraField } from './AuroraField'

type Props = {
  variant?: 'light' | 'dark'
  grain?: boolean
  spotlight?: boolean
  /** Viñeta radial suave para foco / profundidad de campo (sobre todo en slides oscuras con fondo). */
  vignette?: boolean
  background?: ReactNode
  /** Campo atmosférico (manchas de luz que derivan) en slides oscuras SIN fondo propio.
   *  Auto-activo; pásalo `false` para dejar la slide oscura plana. */
  aura?: boolean
  /** Disclaimer al pie, fijo abajo (para slides con cifras/claims: 98%, $30-100k, precios). */
  footnote?: ReactNode
  className?: string
  children: ReactNode
}

/** Lienzo de una slide: fondo + capa de contenido a pantalla completa (1280×720). */
export function Slide({
  variant = 'light',
  grain = false,
  spotlight = true,
  vignette = false,
  background,
  aura = true,
  footnote,
  className,
  children,
}: Props) {
  const dark = variant === 'dark'
  // Atmósfera sólo en slides oscuras planas (sin fondo propio que se ensucie).
  const showAura = aura && dark && !background
  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden',
        dark ? 'bg-charcoal text-ivory' : 'bg-ivory text-charcoal',
        grain && 'grain',
        className,
      )}
    >
      {showAura && <AuroraField className="z-0" />}
      {background && <div className="absolute inset-0 z-0">{background}</div>}
      {vignette && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background: dark
              ? 'radial-gradient(120% 90% at 50% 42%, transparent 45%, rgba(11,12,13,0.55) 100%)'
              : 'radial-gradient(120% 90% at 50% 42%, transparent 55%, rgba(26,28,30,0.10) 100%)',
          }}
        />
      )}
      {dark && spotlight && <Spotlight />}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-24 py-16">{children}</div>
      {footnote && (
        <div
          className={cn(
            'pointer-events-none absolute inset-x-24 bottom-5 z-20 text-[11px] leading-snug',
            dark ? 'text-ivory/60' : 'text-charcoal/60',
          )}
        >
          {footnote}
        </div>
      )}
    </div>
  )
}
