import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { Step } from '../components/Step'
import { Check, Close } from '../components/icons'
import { copy } from '../content/copy'

export function SiNo() {
  const c = copy.sino
  return (
    <Slide variant="light">
      <Stagger>
        <Reveal>
          <Kicker>{c.kicker}</Kicker>
        </Reveal>
        <Reveal>
          <DisplayHeading size="lg" className="mt-6">
            {c.title}
          </DisplayHeading>
        </Reveal>

        <div className="mt-9 grid grid-cols-2 gap-6">
          <Step at={1} className="rounded-2xl border border-petrol/20 bg-petrol/5 p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-petrol/12 text-[18px] text-petrol">
                <Check />
              </span>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-petrol">Esto sí</p>
            </div>
            <ul className="mt-4 space-y-3">
              {c.si.map((s) => (
                <li key={s} className="flex gap-3 text-[15px] leading-snug text-charcoal/85">
                  <span className="mt-0.5 text-petrol">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </Step>
          <Step at={2} className="rounded-2xl border border-charcoal/10 bg-white/50 p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-charcoal/8 text-[18px] text-smoke">
                <Close />
              </span>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-smoke">Esto no</p>
            </div>
            <ul className="mt-4 space-y-3">
              {c.no.map((s) => (
                <li key={s} className="flex gap-3 text-[15px] leading-snug text-charcoal/65">
                  <span className="mt-0.5 text-smoke">✕</span>
                  {s}
                </li>
              ))}
            </ul>
          </Step>
        </div>
      </Stagger>
    </Slide>
  )
}
