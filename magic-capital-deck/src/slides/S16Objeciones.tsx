import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { Step } from '../components/Step'
import { Shield, Globe, Landmark, Percent } from '../components/icons'
import { copy } from '../content/copy'

// Ícono contextual por objeción: estafa (confianza) · inglés/computadora (idioma) ·
// dinero (banco) · crédito 0% (porcentaje). Mismo orden que copy.objeciones.qa.
const qaIcons = [Shield, Globe, Landmark, Percent]

export function Objeciones() {
  const c = copy.objeciones
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

        <div className="mt-9 grid grid-cols-2 gap-5">
          {c.qa.map((item, i) => {
            const Icon = qaIcons[i % qaIcons.length]
            return (
              <Step
                at={i + 1}
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-glass"
              >
                <div className="flex items-start gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/8 text-[20px] text-gold">
                    <Icon />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-ivory">{item.q}</p>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-ivory/70">{item.a}</p>
                  </div>
                </div>
              </Step>
            )
          })}
        </div>
      </Stagger>
    </Slide>
  )
}
