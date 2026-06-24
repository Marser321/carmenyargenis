import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { Step } from '../components/Step'
import { copy } from '../content/copy'

/** Agenda "Qué vas a aprender hoy" — los 5 puntos del doc, uno por paso (→). */
export function Mapa() {
  const c = copy.mapa
  return (
    <Slide variant="dark" grain footnote={c.note}>
      <Stagger>
        <Reveal>
          <Kicker tone="olive">{c.kicker}</Kicker>
        </Reveal>
        <Reveal>
          <DisplayHeading size="lg" className="mt-6">
            {c.title}
          </DisplayHeading>
        </Reveal>
      </Stagger>

      {/* Cada punto entra con su propio paso (→), para narrarlos de a uno en vivo. */}
      <div className="mt-8 space-y-3">
        {c.items.map((it, i) => (
          <Step at={i + 1} key={it.n}>
            <div className="flex items-center gap-6 rounded-xl glass-dark px-6 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-ivory/25">
              <span className="font-display text-3xl font-semibold tabular-nums text-olive/70">
                {it.n}
              </span>
              <div>
                <div className="font-display text-lg font-semibold text-ivory">{it.t}</div>
                <p className="text-[14px] leading-snug text-ivory/65">{it.d}</p>
              </div>
            </div>
          </Step>
        ))}
      </div>
    </Slide>
  )
}
