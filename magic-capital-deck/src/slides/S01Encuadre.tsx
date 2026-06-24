import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { GlassCard } from '../components/GlassCard'
import { Stagger, Reveal } from '../components/Reveal'
import { copy } from '../content/copy'
import { images } from '../content/images'

export function Encuadre() {
  const c = copy.encuadre
  const img = images.encuadre
  return (
    <Slide
      variant="light"
      background={
        // Textura clara a ~10% — da clima sin restar legibilidad al texto oscuro.
        <div
          aria-hidden
          className="h-full w-full bg-cover opacity-[0.10]"
          style={{ backgroundImage: `url('${img.src}')`, backgroundPosition: img.focal }}
        />
      }
    >
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
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal/70">{c.body}</p>
        </Reveal>

        <Reveal className="mt-9 grid grid-cols-2 gap-5">
          <GlassCard>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-petrol">Esto sí</p>
            <ul className="mt-3 space-y-2.5">
              {c.si.map((s) => (
                <li key={s} className="flex gap-3 text-[15px] text-charcoal/85">
                  <span className="mt-0.5 text-petrol">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-smoke">Esto no</p>
            <ul className="mt-3 space-y-2.5">
              {c.no.map((s) => (
                <li key={s} className="flex gap-3 text-[15px] text-charcoal/70">
                  <span className="mt-0.5 text-smoke">✕</span>
                  {s}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <Reveal subtle>
          <p className="mt-7 text-sm text-charcoal/55">{c.note}</p>
        </Reveal>
      </Stagger>
    </Slide>
  )
}
