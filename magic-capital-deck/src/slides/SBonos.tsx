import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { Map, Calendar, Document, Pulse, CreditCard, Users } from '../components/icons'
import { copy } from '../content/copy'

// Un ícono por bono, en el mismo orden que copy.bonos.items.
const bonusIcons = [Map, Calendar, Document, Pulse, CreditCard, Users]

/** Los 6 bonos del intensivo, en rejilla 3×2. */
export function Bonos() {
  const c = copy.bonos
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
      </Stagger>

      <div className="mt-9 grid grid-cols-3 gap-5">
        {c.items.map((it, i) => {
          const Icon = bonusIcons[i % bonusIcons.length]
          return (
            <Reveal
              key={it.t}
              className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/25 hover:shadow-glass"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/8 text-[20px] text-gold">
                <Icon />
              </span>
              <div className="mt-4 font-display text-[16px] font-semibold leading-tight text-ivory">
                {it.t}
              </div>
              <p className="mt-1.5 text-[13.5px] leading-snug text-ivory/65">{it.d}</p>
            </Reveal>
          )
        })}
      </div>
    </Slide>
  )
}
