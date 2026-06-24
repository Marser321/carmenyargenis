import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Disclaimer } from '../components/Disclaimer'
import { Stagger, Reveal } from '../components/Reveal'
import { copy } from '../content/copy'

export function DisclaimerSlide() {
  const c = copy.disclaimer
  return (
    <Slide variant="light">
      <Stagger className="mx-auto max-w-4xl">
        <Reveal>
          <Kicker tone="smoke">{c.kicker}</Kicker>
        </Reveal>
        <Reveal>
          <DisplayHeading size="md" className="mt-5">
            {c.title}
          </DisplayHeading>
        </Reveal>
        <Reveal>
          <p className="mt-5 text-[15px] font-medium text-charcoal/75">{c.notAdvisors}</p>
        </Reveal>
        <Reveal className="mt-6 rounded-2xl border border-charcoal/10 bg-white/55 p-7">
          <Disclaimer text={c.full} variant="full" tone="light" />
        </Reveal>
      </Stagger>
    </Slide>
  )
}
