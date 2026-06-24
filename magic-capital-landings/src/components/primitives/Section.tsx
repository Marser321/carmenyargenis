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
/** Textura/documento muy tenue detrás del contenido (ledger, mapa parcelario…).
 *  Degrada a nada si `src` falta, así que cablear antes de generar la imagen es seguro. */
export type SectionTexture = { src?: string; opacity?: number; focal?: string }

export function Section({
  children,
  tone = 'ivory',
  pad = 'md',
  id,
  className,
  aura = false,
  texture,
}: {
  children: ReactNode
  tone?: Tone
  pad?: keyof typeof padClass
  id?: string
  className?: string
  /** Capa atmosférica (manchas de luz que derivan) detrás del contenido.
   *  `true` elige el tono según la sección; o fíjalo explícito. Solo en tonos oscuros. */
  aura?: boolean | 'petrol' | 'olive' | 'mixed'
  texture?: SectionTexture
}) {
  const auraTone = aura === true ? (tone === 'petrol' ? 'petrol' : 'mixed') : aura || undefined
  const hasTexture = Boolean(texture?.src)
  const lift = Boolean(auraTone) || hasTexture
  return (
    <section id={id} className={cn('relative overflow-hidden', toneClass[tone], padClass[pad], className)}>
      {hasTexture && (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <img
            src={texture!.src}
            alt=""
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
            className="h-full w-full object-cover"
            style={{ opacity: texture!.opacity ?? 0.1, objectPosition: texture!.focal ?? '50% 50%' }}
          />
        </div>
      )}
      {auraTone && <AuroraField tone={auraTone} />}
      {lift ? <div className="relative z-10">{children}</div> : children}
    </section>
  )
}
