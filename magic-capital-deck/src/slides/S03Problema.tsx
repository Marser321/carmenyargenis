import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { GlassCard } from '../components/GlassCard'
import { Stagger, Reveal } from '../components/Reveal'
import { CountUp } from '../components/CountUp'
import { Img } from '../components/Img'
import { Tilt } from '../components/Tilt'
import { copy } from '../content/copy'
import { images } from '../content/images'

export function Problema() {
  const c = copy.problema
  const img = images.problema
  return (
    <Slide variant="light">
      <div className="grid grid-cols-[1.2fr_0.8fr] items-center gap-12">
        <Stagger>
          <Reveal>
            <Kicker>{c.kicker}</Kicker>
          </Reveal>
          <Reveal>
            <DisplayHeading size="md" className="mt-6">
              {c.title}
            </DisplayHeading>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-[16px] leading-relaxed text-charcoal/70">{c.lead}</p>
          </Reveal>

          <Reveal className="mt-7 grid grid-cols-3 gap-4">
            {c.stats.map((s, i) => (
              <GlassCard key={s.label} interactive>
                <div className="font-display text-2xl font-semibold tracking-tight text-petrol">
                  {i === 0 ? <CountUp to={47} prefix="+" suffix="%" delay={0.45} /> : s.value}
                </div>
                <p className="mt-2 text-[13px] leading-snug text-charcoal/65">{s.label}</p>
              </GlassCard>
            ))}
          </Reveal>

          <Reveal subtle>
            <p className="mt-7 font-display text-xl text-charcoal/85">{c.closing}</p>
          </Reveal>
        </Stagger>

        <Reveal>
          <Tilt>
            <Img
              src={img.src}
              alt={img.alt}
              label={img.alt}
              focal={img.focal}
              className="aspect-square w-full rounded-2xl shadow-glass ring-1 ring-charcoal/8"
            />
          </Tilt>
        </Reveal>
      </div>
    </Slide>
  )
}
