import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { AuroraField } from '../media/AuroraField'

export type Tone = 'ivory' | 'ivory-dim' | 'charcoal' | 'petrol'

const toneClass: Record<Tone, string> = {
  ivory: 'bg-ivory text-charcoal',
  'ivory-dim': 'bg-ivory-dim text-charcoal',
  charcoal: 'bg-charcoal text-ivory grain',
  petrol: 'bg-petrol text-ivory grain',
}

const padClass = {
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-24',
  lg: 'py-20 sm:py-32',
} as const

/**
 * Banda de página a todo el ancho. `tone` decide fondo+texto; las tonalidades
 * oscuras (charcoal/petrol) son los "momentos editoriales" del sistema híbrido
 * y reciben grano sutil. `relative` para anclar fondos/scrims absolutos.
 */
export function Section({
  children,
  tone = 'ivory',
  pad = 'md',
  id,
  className,
  aura = false,
}: {
  children: ReactNode
  tone?: Tone
  pad?: keyof typeof padClass
  id?: string
  className?: string
  /** Capa atmosférica (manchas de luz que derivan) detrás del contenido.
   *  `true` elige el tono según la sección; o fíjalo explícito. Solo en tonos oscuros. */
  aura?: boolean | 'petrol' | 'olive' | 'mixed'
}) {
  const auraTone = aura === true ? (tone === 'petrol' ? 'petrol' : 'mixed') : aura || undefined
  return (
    <section id={id} className={cn('relative overflow-hidden', toneClass[tone], padClass[pad], className)}>
      {auraTone && <AuroraField tone={auraTone} />}
      {auraTone ? <div className="relative z-10">{children}</div> : children}
    </section>
  )
}
