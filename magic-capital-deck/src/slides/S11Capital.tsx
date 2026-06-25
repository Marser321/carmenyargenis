import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { CapitalCalc } from '../components/CapitalCalc'
import { Stagger, Reveal } from '../components/Reveal'
import { copy } from '../content/copy'

export function Capital() {
  const c = copy.capital
  return (
    <Slide variant="light">
      <div className="grid grid-cols-[0.85fr_1.15fr] items-center gap-12">
        <Stagger>
          <Reveal>
            <Kicker>{c.kicker}</Kicker>
          </Reveal>
          <Reveal>
            <DisplayHeading size="md" className="mt-6">
              {c.title}
            </DisplayHeading>
          </Reveal>
          <Reveal subtle>
            <p className="mt-6 border-l-2 border-gold/40 pl-4 text-[15px] leading-relaxed text-ivory/65">
              {c.note}
            </p>
          </Reveal>
        </Stagger>

        <Reveal>
          <CapitalCalc
            items={c.items}
            totalLabel={c.totalLabel}
            totalLow={c.totalLow}
            totalHigh={c.totalHigh}
          />
        </Reveal>
      </div>
    </Slide>
  )
}
