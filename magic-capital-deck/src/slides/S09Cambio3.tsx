import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { Step } from '../components/Step'
import { Img } from '../components/Img'
import { Tilt } from '../components/Tilt'
import { copy } from '../content/copy'
import { images } from '../content/images'

export function Cambio3() {
  const c = copy.cambio3
  const img = images.cambio3
  return (
    <Slide variant="light">
      <div className="grid grid-cols-[1fr_0.8fr] items-center gap-14">
        <Stagger>
          <Reveal>
            <Kicker>{c.kicker}</Kicker>
          </Reveal>
          <Reveal>
            <DisplayHeading size="lg" className="mt-6">
              {c.title}
            </DisplayHeading>
          </Reveal>
          <Reveal>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/70">{c.body}</p>
          </Reveal>
          <div className="mt-7 space-y-3">
            {c.bullets.map((b, i) => (
              <Step at={i + 1} key={b} className="flex items-start gap-3">
                <span className="mt-0.5 text-petrol">✓</span>
                <span className="text-[15px] leading-snug text-charcoal/80">{b}</span>
              </Step>
            ))}
          </div>
        </Stagger>

        <Reveal className="flex justify-center">
          <Tilt>
            <div className="relative">
              <Img
                src={img.src}
                alt={img.alt}
                label={img.alt}
                focal={img.focal}
                className="aspect-[4/5] w-full rounded-2xl shadow-glass ring-1 ring-charcoal/10"
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-charcoal/90 px-3 py-1.5 font-display text-xl font-semibold tracking-tight text-ivory shadow-lg">
                .gov
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </Slide>
  )
}
