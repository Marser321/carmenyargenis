import type { ReactNode } from 'react'
import { Container } from '../primitives/Container'
import { VideoBackground, type Scrim } from '../media'
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
  image?: { src: string; alt: string; focal?: string; scrim?: Scrim; video?: string; webm?: string }
  tone?: HeroTone
  parallax?: boolean
  children: ReactNode
  className?: string
}) {
  const dark = tone !== 'ivory'
  // Oscuro-lujo: todos los tonos del hero son superficies oscuras (navy/midnight).
  const toneClass =
    tone === 'charcoal' ? 'bg-midnight text-ivory' : tone === 'petrol' ? 'bg-navy text-ivory' : 'bg-navy text-ivory'

  // Drop-in: VideoBackground muestra el poster (la imagen) hoy; cuando se generen
  // los loops M1–M5 basta con pasar `image.video` y reproduce el bucle cinematográfico.
  const bg = image && (
    <VideoBackground
      src={image.video}
      webm={image.webm}
      poster={image.src}
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
      <Container className="pt-36 pb-16 sm:pt-40 sm:pb-24">{children}</Container>
    </section>
  )
}
