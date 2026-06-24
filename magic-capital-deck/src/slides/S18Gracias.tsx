import { Slide } from '../components/Slide'
import { Kicker } from '../components/Kicker'
import { DisplayHeading } from '../components/DisplayHeading'
import { Stagger, Reveal } from '../components/Reveal'
import { Img } from '../components/Img'
import { copy } from '../content/copy'
import { images } from '../content/images'

export function Gracias() {
  const c = copy.gracias
  const img = images.gracias
  return (
    <Slide
      variant="dark"
      grain
      spotlight={false}
      background={
        <Img src={img.src} alt={img.alt} label={img.alt} focal={img.focal} scrim="full" className="h-full w-full" />
      }
    >
      <Stagger className="mx-auto max-w-3xl text-center">
        <Reveal className="flex justify-center">
          <Kicker tone="olive">{c.kicker}</Kicker>
        </Reveal>
        <Reveal>
          <DisplayHeading size="xl" className="mt-7">
            {c.title}
          </DisplayHeading>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ivory/80">{c.body}</p>
        </Reveal>
        <Reveal subtle>
          <p className="mt-10 text-[15px] font-medium tracking-wide text-olive">{c.signoff}</p>
        </Reveal>
      </Stagger>
    </Slide>
  )
}
