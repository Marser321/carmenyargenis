import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { DualMechanism } from '../components/DualMechanism'
import { copy } from '../content/copy'

export function Quienes() {
  const c = copy.quienes
  return (
    <Slide variant="dark" grain>
      <div className="grid grid-cols-[1.15fr_0.85fr] items-center gap-12">
        <Stagger>
          <Reveal>
            <Kicker tone="olive">{c.kicker}</Kicker>
          </Reveal>
          <Reveal>
            <DisplayHeading size="lg" className="mt-6">
              {c.title}
            </DisplayHeading>
          </Reveal>
          <Reveal>
            <p className="mt-5 text-[17px] leading-relaxed text-ivory/75">{c.body}</p>
          </Reveal>
          <div className="mt-6 space-y-2.5">
            {c.signals.map((s) => (
              <Reveal key={s} subtle className="flex items-start gap-3">
                <span className="mt-1 text-olive">◆</span>
                <span className="text-[15px] leading-snug text-ivory/85">{s}</span>
              </Reveal>
            ))}
          </div>
          <Reveal subtle>
            <p className="mt-6 font-display text-xl text-olive">{c.closing}</p>
          </Reveal>
        </Stagger>

        {/* El mecanismo dual en movimiento (la diferenciación de la marca). */}
        <DualMechanism left={c.dual.left} right={c.dual.right} center={c.dual.center} />
      </div>
    </Slide>
  )
}
