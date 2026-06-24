import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { Img } from '../components/Img'
import { DepthBackground } from '../components/DepthBackground'
import { copy } from '../content/copy'
import { images } from '../content/images'

export function GranIdea() {
  const c = copy.granIdea
  const img = images.granIdea
  return (
    <Slide
      variant="dark"
      grain
      spotlight={false}
      vignette
      background={
        <DepthBackground
          layers={[
            // Textura de parcelas/ledger al fondo (parallax sutil).
            {
              depth: 0.2,
              node: <Img src={img.src} alt={img.alt} label={img.alt} focal={img.focal} className="h-full w-full" />,
            },
            // Acento de luz a media profundidad.
            {
              depth: 0.5,
              node: (
                <div
                  className="h-full w-full"
                  style={{ background: 'radial-gradient(70% 60% at 50% 30%, rgba(14,58,74,0.25), transparent 72%)' }}
                />
              ),
            },
            // Scrim fijo para legibilidad del titular centrado.
            { depth: 0, node: <div className="h-full w-full bg-charcoal/55" /> },
          ]}
        />
      }
    >
      <Stagger className="mx-auto max-w-4xl text-center">
        <Reveal className="flex justify-center">
          <Kicker tone="olive">{c.kicker}</Kicker>
        </Reveal>
        <Reveal>
          <DisplayHeading size="xl" className="mt-8">
            {c.title}
          </DisplayHeading>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-ivory/80">{c.body}</p>
        </Reveal>
        <Reveal subtle>
          <p className="mx-auto mt-7 max-w-2xl border-t border-ivory/15 pt-7 font-display text-2xl leading-snug text-olive">
            {c.emphasis}
          </p>
        </Reveal>
      </Stagger>
    </Slide>
  )
}
