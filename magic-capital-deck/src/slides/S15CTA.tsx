import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { CTAButton } from '../components/CTAButton'
import { Stagger, Reveal } from '../components/Reveal'
import { copy } from '../content/copy'

export function CTA() {
  const c = copy.cta
  return (
    <Slide variant="dark" grain className="bg-petrol">
      <Stagger className="mx-auto max-w-3xl text-center">
        <Reveal className="flex justify-center">
          <Kicker tone="ivory">{c.kicker}</Kicker>
        </Reveal>
        <Reveal>
          <DisplayHeading size="xl" className="mt-7 text-ivory">
            {c.title}
          </DisplayHeading>
        </Reveal>
        <Reveal className="mt-10 flex items-center justify-center gap-4">
          <CTAButton variant="primary" className="bg-ivory text-petrol hover:bg-white">
            {c.primary}
          </CTAButton>
          <CTAButton variant="ghost" className="text-ivory">
            {c.secondary}
          </CTAButton>
        </Reveal>
        <Reveal subtle>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-ivory/70">{c.microcopy}</p>
        </Reveal>
      </Stagger>
    </Slide>
  )
}
