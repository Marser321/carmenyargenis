import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { Step } from '../components/Step'
import { MAP9Phases } from '../components/MAP9Phases'
import { useStep } from '../deck/StepContext'
import { copy } from '../content/copy'

export function Cambio1() {
  const c = copy.cambio1
  const step = useStep()
  return (
    <Slide variant="light" footnote={c.note}>
      <div className="grid grid-cols-[0.92fr_1.08fr] items-center gap-10">
        <div>
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
              <p className="mt-4 text-[16px] leading-relaxed text-charcoal/70">{c.body}</p>
            </Reveal>
          </Stagger>

          {/* Paso 2 — el corazón del método: qué NO comprar */}
          <Step at={2} className="mt-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-petrol/80">
              El corazón: primero qué NO comprar
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              {c.filters.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-3 rounded-xl border border-charcoal/10 bg-white/60 px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-charcoal/25"
                >
                  <span className="text-smoke">✕</span>
                  <span className="text-[13.5px] text-charcoal/80">{f}</span>
                </div>
              ))}
            </div>
          </Step>

          {/* Paso 3 — cierre */}
          <Step at={3} subtle className="mt-6">
            <p className="font-display text-xl text-petrol">{c.closing}</p>
          </Step>
        </div>

        {/* Paso 1 — las 9 fases se construyen 01→09 */}
        <div>
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-charcoal/45">
            Las 9 fases del Método MAP-9
          </p>
          <MAP9Phases phases={c.phases} active={step >= 1} />
        </div>
      </div>
    </Slide>
  )
}
