import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Disclaimer } from '../components/Disclaimer'
import { Stagger, Reveal } from '../components/Reveal'
import { Step } from '../components/Step'
import { Img } from '../components/Img'
import { Tilt } from '../components/Tilt'
import { copy } from '../content/copy'
import { images } from '../content/images'

export function Cambio2() {
  const c = copy.cambio2
  const img = images.cambio2
  return (
    <Slide variant="dark" grain>
      <div className="grid grid-cols-[1fr_0.6fr] items-center gap-10">
        <Stagger>
          <Reveal>
            <Kicker tone="olive">{c.kicker}</Kicker>
          </Reveal>
          <Reveal>
            <DisplayHeading size="md" className="mt-6">
              {c.title}
            </DisplayHeading>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-[16px] leading-relaxed text-ivory/75">{c.body}</p>
          </Reveal>

          {/* Cada condición real del crédito entra con su paso (→). */}
          <div className="mt-6 grid grid-cols-1 gap-3">
            {c.pillars.map((p, i) => (
              <Step at={i + 1} key={p.t}>
                <div className="flex items-start gap-4 rounded-xl glass-dark px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ivory/25">
                  <div className="font-display text-xl font-semibold tabular-nums text-olive/70">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="font-display text-base font-semibold text-ivory">{p.t}</div>
                    <p className="mt-1 text-[13.5px] leading-snug text-ivory/65">{p.d}</p>
                  </div>
                </div>
              </Step>
            ))}
          </div>

          <Step at={c.pillars.length} subtle className="mt-6">
            <Disclaimer text={c.disclaimer} variant="inline" tone="dark" />
          </Step>
        </Stagger>

        <Reveal>
          <Tilt>
            <Img
              src={img.src}
              alt={img.alt}
              label={img.alt}
              focal={img.focal}
              className="aspect-square w-full rounded-2xl shadow-glass-dark ring-1 ring-white/10"
            />
          </Tilt>
        </Reveal>
      </div>
    </Slide>
  )
}
