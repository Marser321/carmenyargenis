import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { PortalMock } from '../components/PortalMock'
import { Stagger, Reveal } from '../components/Reveal'
import { copy } from '../content/copy'

export function Demo() {
  const c = copy.demo
  return (
    <Slide variant="dark" grain>
      <div className="grid grid-cols-[0.85fr_1.15fr] items-center gap-12">
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
          <Reveal subtle>
            <p className="mt-7 border-l-2 border-olive/40 pl-4 text-sm text-ivory/55">{c.note}</p>
          </Reveal>
        </Stagger>

        <Reveal>
          <PortalMock />
        </Reveal>
      </div>
    </Slide>
  )
}
