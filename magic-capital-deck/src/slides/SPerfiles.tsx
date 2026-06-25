import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { Step } from '../components/Step'
import { copy } from '../content/copy'

/** ¿Esto es para ti? — los 3 perfiles de audiencia del documento, uno por paso (→). */
export function Perfiles() {
  const c = copy.perfiles
  return (
    <Slide variant="light" footnote={c.note}>
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
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ivory/70">{c.body}</p>
        </Reveal>
      </Stagger>

      <div className="mt-9 grid grid-cols-3 gap-6">
        {c.items.map((it, i) => (
          <Step at={i + 1} key={it.n}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/25 hover:shadow-glass">
              <div className="font-display text-4xl font-semibold tabular-nums text-gold/35">
                {it.n}
              </div>
              <div className="mt-4 font-display text-xl font-semibold leading-tight text-ivory">
                {it.t}
              </div>
              <p className="mt-2 text-[15px] leading-snug text-ivory/65">{it.d}</p>
            </div>
          </Step>
        ))}
      </div>
    </Slide>
  )
}
