import type { ReactNode } from 'react'
import { Container } from '../primitives/Container'
import { Img, type Scrim } from '../media'
import { DepthBackground } from '../media'
import { Spotlight } from '../media'
import { cn } from '../../lib/cn'

type HeroTone = 'charcoal' | 'petrol' | 'ivory'

/**
 * Shell de hero: imagen de fondo (Ken Burns + scrim) con parallax opcional,
 * spotlight en tonos oscuros y contenedor con padding para la barra fija.
 * El contenido (titular, form, CTAs) va como children.
 */
export function Hero({
  image,
  tone = 'charcoal',
  parallax = true,
  children,
  className,
}: {
  image?: { src: string; alt: string; focal?: string; scrim?: Scrim }
  tone?: HeroTone
  parallax?: boolean
  children: ReactNode
  className?: string
}) {
  const dark = tone !== 'ivory'
  const toneClass =
    tone === 'charcoal' ? 'bg-charcoal text-ivory' : tone === 'petrol' ? 'bg-petrol text-ivory' : 'bg-ivory text-charcoal'

  const bg = image && (
    <Img
      src={image.src}
      alt={image.alt}
      focal={image.focal}
      scrim={image.scrim ?? (dark ? 'left' : 'none')}
      priority
      className="h-full w-full"
    />
  )

  return (
    <section className={cn('relative isolate overflow-hidden grain', toneClass, className)}>
      {image &&
        (parallax ? (
          <DepthBackground layers={[{ node: bg, depth: 0.35 }]} />
        ) : (
          <div className="absolute inset-0">{bg}</div>
        ))}
      {dark && <Spotlight />}
      <Container className="pt-28 pb-16 sm:pt-32 sm:pb-24">{children}</Container>
    </section>
  )
}
