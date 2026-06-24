import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { Step } from '../components/Step'
import { Check, Close } from '../components/icons'
import { copy } from '../content/copy'

/** Tipos de subasta y cuáles evitar — prioriza / evita (oscura), un paso por columna. */
export function TiposSubasta() {
  const c = copy.tiposSubasta
  return (
    <Slide variant="dark" grain>
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
          <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-ivory/75">{c.body}</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <Step at={1} className="rounded-2xl glass-dark p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-olive/15 text-[18px] text-olive">
                <Check />
              </span>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-olive">
                Prioriza
              </p>
            </div>
            <ul className="mt-4 space-y-3">
              {c.prioriza.map((s) => (
                <li key={s} className="flex gap-3 text-[15px] leading-snug text-ivory/85">
                  <span className="mt-0.5 text-olive">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </Step>
          <Step at={2} className="rounded-2xl border border-ivory/10 bg-charcoal/40 p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-ivory/8 text-[18px] text-smoke">
                <Close />
              </span>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-smoke">
                Evita
              </p>
            </div>
            <ul className="mt-4 space-y-3">
              {c.evita.map((s) => (
                <li key={s} className="flex gap-3 text-[15px] leading-snug text-ivory/60">
                  <span className="mt-0.5 text-smoke">✕</span>
                  {s}
                </li>
              ))}
            </ul>
          </Step>
        </div>

        <Reveal subtle>
          <p className="mt-7 max-w-3xl border-l-2 border-ivory/20 pl-4 text-sm text-ivory/55">
            {c.note}
          </p>
        </Reveal>
      </Stagger>
    </Slide>
  )
}
