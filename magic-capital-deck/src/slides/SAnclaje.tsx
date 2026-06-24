import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { copy } from '../content/copy'

/** El valor y el precio: escalera de anclaje $1,000 → $500 → $297 (sin imágenes de dinero). */
export function Anclaje() {
  const c = copy.anclaje
  return (
    <Slide variant="dark" grain footnote={c.note}>
      <div className="grid grid-cols-[1fr_0.9fr] items-center gap-12">
        <Stagger>
          <Reveal>
            <Kicker tone="olive">{c.kicker}</Kicker>
          </Reveal>
          <Reveal>
            <DisplayHeading size="md" className="mt-6">
              {c.title}
            </DisplayHeading>
          </Reveal>
          <Reveal>
            <p className="mt-5 text-[16px] leading-relaxed text-ivory/75">{c.body}</p>
          </Reveal>
          <Reveal subtle>
            <p className="mt-6 max-w-xl border-l-2 border-olive/40 pl-4 text-[15px] leading-relaxed text-ivory/70">
              {c.rationale}
            </p>
          </Reveal>
        </Stagger>

        <Stagger delay={0.3} className="space-y-3">
          {c.ladder.map((row) => (
            <Reveal key={row.value}>
              <div
                className={
                  'flex items-center justify-between rounded-xl px-6 py-4 transition-transform duration-300 ' +
                  (row.struck
                    ? 'border border-ivory/10 bg-charcoal/40'
                    : 'bg-petrol shadow-glass-dark hover:-translate-y-0.5')
                }
              >
                <span
                  className={
                    'text-[14px] leading-snug ' + (row.struck ? 'text-ivory/55' : 'text-ivory/85')
                  }
                >
                  {row.label}
                </span>
                <span
                  className={
                    'font-display font-semibold tabular-nums ' +
                    (row.struck
                      ? 'text-xl text-smoke line-through decoration-smoke/70'
                      : 'text-3xl text-ivory')
                  }
                >
                  {row.value}
                </span>
              </div>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </Slide>
  )
}
