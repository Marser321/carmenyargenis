import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { CaseBreakdown } from '../components/CaseBreakdown'
import { Stagger, Reveal } from '../components/Reveal'
import { Img } from '../components/Img'
import { copy } from '../content/copy'
import { images } from '../content/images'

export function Caso() {
  const c = copy.caso
  const img = images.caso
  return (
    <Slide variant="dark" grain footnote={c.note}>
      <div className="grid grid-cols-[0.92fr_1.08fr] items-center gap-12">
        <Stagger>
          <Reveal>
            <Kicker tone="olive">{c.kicker}</Kicker>
          </Reveal>
          <Reveal>
            <DisplayHeading size="md" className="mt-6">
              {c.title}
            </DisplayHeading>
          </Reveal>
          <Reveal className="mt-6">
            <Img
              src={img.src}
              alt={img.alt}
              label={img.alt}
              focal={img.focal}
              className="aspect-[16/9] w-full rounded-xl shadow-glass-dark ring-1 ring-white/10"
            />
          </Reveal>
          <Reveal subtle>
            <p className="mt-5 text-[15px] leading-relaxed text-ivory/70">{c.fraction}</p>
          </Reveal>
          <Reveal>
            <p className="mt-4 border-l-2 border-olive/50 pl-4 font-display text-lg leading-snug text-ivory">
              {c.upside}
            </p>
          </Reveal>
        </Stagger>

        <Reveal>
          <CaseBreakdown
            rows={c.rows}
            totalLabel={c.totalLabel}
            totalValue={c.totalValue}
            disclaimer={c.inlineDisclaimer}
          />
        </Reveal>
      </div>
    </Slide>
  )
}
