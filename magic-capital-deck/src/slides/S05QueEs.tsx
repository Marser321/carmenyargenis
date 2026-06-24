import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { Img } from '../components/Img'
import { Tilt } from '../components/Tilt'
import { copy } from '../content/copy'
import { images } from '../content/images'

export function QueEs() {
  const c = copy.queEs
  const img = images.queEs
  return (
    <Slide variant="light">
      <div className="grid grid-cols-[1.15fr_0.6fr] items-center gap-14">
        <Stagger>
          <Reveal>
            <Kicker>{c.kicker}</Kicker>
          </Reveal>
          <Reveal>
            <DisplayHeading size="lg" className="mt-6">
              {c.title}
            </DisplayHeading>
          </Reveal>

          <div className="mt-8 space-y-5">
            {c.steps.map((s, i) => (
              <Reveal key={i} className="flex items-start gap-5">
                <span className="font-display text-3xl font-semibold tabular-nums text-petrol/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="max-w-2xl pt-1 text-lg leading-snug text-charcoal/85">{s}</p>
              </Reveal>
            ))}
          </div>

          <Reveal subtle>
            <p className="mt-8 max-w-2xl border-l-2 border-olive/40 pl-4 text-sm text-charcoal/60">
              {c.note}
            </p>
          </Reveal>
        </Stagger>

        <Reveal className="flex justify-center">
          <Tilt>
            <Img
              src={img.src}
              alt={img.alt}
              label={img.alt}
              focal={img.focal}
              className="h-[460px] w-[260px] rounded-3xl shadow-glass ring-1 ring-charcoal/10"
            />
          </Tilt>
        </Reveal>
      </div>
    </Slide>
  )
}
