import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { Img } from '../components/Img'
import { copy } from '../content/copy'
import { images } from '../content/images'

export function Intensivo() {
  const c = copy.intensivo
  const img = images.intensivo
  return (
    <Slide
      variant="dark"
      grain
      footnote={c.note}
      background={
        <Img
          src={img.src}
          alt={img.alt}
          label={img.alt}
          focal={img.focal}
          scrim="full"
          className="h-full w-full"
        />
      }
    >
      <div className="grid grid-cols-[1.05fr_0.95fr] gap-12">
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
            <p className="mt-5 text-lg leading-relaxed text-ivory/75">{c.body}</p>
          </Reveal>
          <div className="mt-7 space-y-2.5">
            {c.includes.map((it) => (
              <Reveal key={it} className="flex items-center gap-3">
                <span className="text-olive">✓</span>
                <span className="text-[15px] text-ivory/85">{it}</span>
              </Reveal>
            ))}
          </div>
          <Reveal subtle>
            <div className="mt-7 inline-flex items-baseline gap-3 rounded-xl bg-petrol px-5 py-3 transition-transform duration-300 hover:-translate-y-0.5">
              <span className="text-[13px] uppercase tracking-wider text-ivory/70">Intensivo</span>
              <span className="font-display text-2xl font-semibold text-ivory">{c.price}</span>
            </div>
          </Reveal>
        </Stagger>

        <Stagger delay={0.4} className="flex flex-col justify-center gap-5">
          <Reveal>
            <div className="rounded-2xl glass-dark p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ivory/25">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-olive">
                Para quién sí
              </p>
              <ul className="mt-3 space-y-2">
                {c.si.map((s) => (
                  <li key={s} className="flex gap-3 text-[14px] leading-snug text-ivory/80">
                    <span className="mt-0.5 text-olive">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-ivory/10 bg-charcoal/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ivory/25">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-smoke">
                Para quién todavía no
              </p>
              <ul className="mt-3 space-y-2">
                {c.no.map((s) => (
                  <li key={s} className="flex gap-3 text-[14px] leading-snug text-ivory/55">
                    <span className="mt-0.5 text-smoke">✕</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Stagger>
      </div>
    </Slide>
  )
}
