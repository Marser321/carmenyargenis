import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { Img } from '../components/Img'
import { DepthBackground } from '../components/DepthBackground'
import { copy } from '../content/copy'
import { images } from '../content/images'

export function Cover() {
  const c = copy.cover
  const img = images.cover
  return (
    <Slide
      variant="dark"
      grain
      spotlight={false}
      vignette
      background={
        <DepthBackground
          layers={[
            // Foto de fundadores al fondo (parallax sutil con el puntero).
            {
              depth: 0.22,
              node: <Img src={img.src} alt={img.alt} label={img.alt} focal={img.focal} className="h-full w-full" />,
            },
            // Halo de luz oliva/petróleo a media profundidad.
            {
              depth: 0.6,
              node: (
                <div
                  className="h-full w-full"
                  style={{
                    background:
                      'radial-gradient(60% 70% at 78% 30%, rgba(92,107,74,0.18), transparent 70%)',
                  }}
                />
              ),
            },
            // Scrim fijo (no se mueve) para legibilidad del titular.
            {
              depth: 0,
              node: <div className="h-full w-full bg-gradient-to-r from-charcoal/90 via-charcoal/45 to-transparent" />,
            },
          ]}
        />
      }
    >
      <Stagger className="max-w-4xl">
        <Reveal>
          <Kicker tone="olive">
            <span className="mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-olive align-middle" />
            {c.kicker}
          </Kicker>
        </Reveal>
        <Reveal>
          <DisplayHeading size="xl" className="mt-8">
            {c.title}
          </DisplayHeading>
        </Reveal>
        <Reveal>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ivory/80">{c.subtitle}</p>
        </Reveal>
      </Stagger>

      <Stagger delay={0.7} className="absolute inset-x-24 bottom-14 flex items-end justify-between">
        <Reveal subtle>
          <p className="text-[15px] font-medium text-ivory/90">{c.presenters}</p>
        </Reveal>
        <Reveal subtle>
          <p className="text-[13px] text-ivory/60">{c.footnote}</p>
        </Reveal>
      </Stagger>
    </Slide>
  )
}
