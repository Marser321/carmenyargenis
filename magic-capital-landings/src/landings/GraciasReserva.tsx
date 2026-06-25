import {
  Section,
  Container,
  Kicker,
  DisplayHeading,
  SectionHeader,
  GlassCard,
  CTAButton,
  Badge,
  Icon,
} from '../components/primitives'
import { Reveal, Stagger, RevealItem } from '../components/motion'
import { FAQAccordion } from '../components/blocks'
import { Hero, LandingLayout } from '../components/shell'
import { CalendarButton } from '../components/forms'
import { Img } from '../components/media'
import { FOUNDERS, waLink, FUNNEL } from '../content/brand'
import { img } from '../content/images'
import { sectionBg } from '../content/section-backgrounds'

// Fecha/hora de ejemplo — editable. La masterclass es semanal, en vivo.
const FECHA = 'Miércoles, 7:00 PM ET'

const PASOS = [
  {
    icon: <Icon.Whatsapp />,
    t: 'Revisa WhatsApp y tu correo',
    d: 'Ya te enviamos la confirmación con el enlace de acceso. Si no lo ves en unos minutos, revisa spam o escríbenos.',
  },
  {
    icon: <Icon.Calendar />,
    t: 'Añádela a tu calendario',
    d: 'Bloquea el horario para que nada se cruce. El recordatorio te llega también una hora antes de empezar.',
  },
  {
    icon: <Icon.Check />,
    t: 'Confirma tu asistencia',
    d: 'Respóndenos por WhatsApp para reservar tu cupo en vivo. Las sesiones tienen capacidad real y limitada.',
  },
]

const CONEXION = [
  {
    icon: <Icon.Globe />,
    t: '100% online por Zoom',
    d: 'No necesitas instalar nada complicado: se abre desde el navegador o la app de Zoom.',
  },
  {
    icon: <Icon.Document />,
    t: 'El enlace llega dos veces',
    d: 'Por WhatsApp y correo al reservar, y de nuevo una hora antes de la sesión.',
  },
  {
    icon: <Icon.Clock />,
    t: 'Conéctate 5 minutos antes',
    d: 'Entra con margen para acomodarte. Empezamos puntuales para respetar tu tiempo.',
  },
  {
    icon: <Icon.Whatsapp />,
    t: 'Si algo falla, escríbenos',
    d: 'Si no te llega el enlace o tienes dudas técnicas, mándanos un mensaje por WhatsApp y te ayudamos.',
  },
]

const PREPARACION = [
  'Papel y lápiz (o una nota en el teléfono) para anotar lo que quieras revisar después.',
  'El condado o estado que te interesa —Florida o Pennsylvania— para mirarlo con criterio.',
  'Mente abierta y tus preguntas: este es el momento de resolver dudas en vivo.',
]

const FAQ = [
  {
    q: '¿La masterclass es gratis?',
    a: 'Sí. La masterclass es gratuita, en vivo y en español. No pedimos tarjeta para reservar tu lugar.',
  },
  {
    q: '¿Cuánto dura?',
    a: 'Alrededor de 60 minutos, con un espacio al final para responder preguntas en vivo.',
  },
  {
    q: '¿Queda grabada?',
    a: 'Está pensada para vivirse en vivo: ahí es donde resolvemos tus dudas en el momento. Si surge algún material de repaso, te avisamos por WhatsApp y correo.',
  },
]

export default function GraciasReserva() {
  return (
    <LandingLayout waMessage="Hola, acabo de reservar mi lugar en la masterclass y quiero confirmar mi asistencia.">
      {/* 1 · Confirmación (hero) */}
      <Hero tone="petrol">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/20 text-3xl text-gold ring-1 ring-gold/40">
              <Icon.Check />
            </span>
          </Reveal>
          <Kicker className="mt-6">Magic Capital · Masterclass gratis</Kicker>
          <DisplayHeading as="h1" size="xl" className="mt-4">
            ¡Tu lugar está reservado!
          </DisplayHeading>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ivory/80">
            Te enviamos los detalles por WhatsApp y correo. Guarda este horario: nos vemos en vivo, en
            español, para mostrarte el proceso paso a paso.
          </p>
          <div className="mt-6 flex justify-center">
            <Badge tone="ivory">
              <Icon.Calendar /> {FECHA}
            </Badge>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <CalendarMasterclassButton variant="light" />
            <CTAButton
              href={waLink('Hola, acabo de reservar mi lugar en la masterclass. ¿Me confirman los detalles?')}
              variant="whatsapp"
              icon={<Icon.Whatsapp />}
            >
              Confírmame por WhatsApp
            </CTAButton>
          </div>
          <p className="mt-4 text-[13px] text-ivory/55">
            Revisa tu WhatsApp y correo para el enlace de acceso.
          </p>
        </div>
      </Hero>

      {/* 2 · Tres pasos rápidos */}
      <Section tone="ivory" pad="lg" texture={sectionBg('02-gracias-reserva', 1)}>
        <Container>
          <SectionHeader
            kicker="Listo, ahora solo falta esto"
            title="Tres pasos rápidos para no perderte nada"
          />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {PASOS.map((p, i) => (
              <RevealItem key={p.t}>
                <GlassCard tone="solid" className="flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/10 font-display text-sm font-semibold text-gold">
                      {i + 1}
                    </span>
                    <span className="text-xl text-gold">{p.icon}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ivory">{p.t}</h3>
                  <p className="mt-2 text-[14.5px] leading-snug text-ivory/70">{p.d}</p>
                  {i === 1 && (
                    <div className="mt-4">
                      <CalendarMasterclassButton variant="secondary" />
                    </div>
                  )}
                  {i === 2 && (
                    <div className="mt-4">
                      <CTAButton
                        href={waLink('Hola, quiero confirmar mi asistencia a la masterclass de Magic Capital.')}
                        variant="whatsapp"
                        size="md"
                        icon={<Icon.Whatsapp />}
                      >
                        Confirmar por WhatsApp
                      </CTAButton>
                    </div>
                  )}
                </GlassCard>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* 3 · Cómo conectarte */}
      <Section tone="ivory-dim" texture={sectionBg('02-gracias-reserva', 2)}>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <SectionHeader
                align="left"
                kicker="El día de la masterclass"
                title="Cómo conectarte, sin complicaciones"
              />
              <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
                {CONEXION.map((c) => (
                  <RevealItem key={c.t} subtle>
                    <div className="flex h-full items-start gap-3 rounded-xl bg-navy-soft/60 px-4 py-3.5 ring-1 ring-white/5">
                      <span className="mt-0.5 shrink-0 text-lg text-gold">{c.icon}</span>
                      <div>
                        <h3 className="font-display text-[15px] font-semibold text-ivory">{c.t}</h3>
                        <p className="mt-1 text-[13.5px] leading-snug text-ivory/70">{c.d}</p>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>
            </div>
            <Reveal>
              <Img
                src={img('02', '02-gracias-reserva__recordatorio-calendario-masterclass.png')}
                alt="Recordatorio de la masterclass en el calendario"
                className="aspect-[9/16] w-full rounded-2xl shadow-glass-dark"
                focal="50% 40%"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 4 · Cómo prepararte (editorial) */}
      <Section tone="charcoal" pad="lg" texture={sectionBg('02-gracias-reserva', 3)}>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className="order-last lg:order-first">
              <Img
                src={img('02', '02-gracias-reserva__preparacion-que-traer.png')}
                alt="Mesa con papel, lápiz y notas para preparar la masterclass"
                className="aspect-square w-full rounded-2xl shadow-glass-dark"
                focal="50% 50%"
              />
            </Reveal>
            <div>
              <SectionHeader
                align="left"
                tone="dark"
                kicker="Cómo prepararte"
                title="Llega con lo justo para sacarle provecho"
              />
              <Stagger className="mt-6 space-y-3">
                {PREPARACION.map((b) => (
                  <RevealItem key={b} subtle>
                    <div className="flex gap-3">
                      <Icon.Check className="mt-1 shrink-0 text-gold" />
                      <p className="text-[15px] leading-snug text-ivory/80">{b}</p>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>
              <Reveal className="mt-6">
                <p className="border-l-2 border-gold/50 pl-4 font-display text-lg italic text-ivory/85">
                  No te pediremos pujar por intuición. Primero, criterio.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5 · Tu siguiente paso, sin presión */}
      <Section tone="ivory" pad="lg" texture={sectionBg('02-gracias-reserva', 4)}>
        <Container width="narrow">
          <SectionHeader
            kicker="Después de la masterclass"
            title="Tu siguiente paso, sin presión"
            intro="En la masterclass verás el panorama completo: qué es el tax deed, cómo se filtra una propiedad y por dónde empezar. No hace falta decidir nada hoy. Si más adelante quieres seguir cerca con poco compromiso, está la Comunidad; y si quieres profundizar en el método, el Intensivo. A tu ritmo."
          />
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2">
            <RevealItem>
              <GlassCard tone="light" className="flex h-full flex-col">
                <div className="flex items-center gap-2">
                  <Icon.Users className="text-gold" />
                  <Badge tone="petrol">{FUNNEL.comunidad.price}/mes</Badge>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-ivory">
                  {FUNNEL.comunidad.name}
                </h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-snug text-ivory/70">
                  Acompañamiento continuo y comunidad para seguir aprendiendo a tu ritmo. Cancela cuando
                  quieras.
                </p>
                <div className="mt-5">
                  <CTAButton to="/l/09-comunidad" variant="secondary" size="md" icon={<Icon.ArrowRight />}>
                    Conocer la comunidad
                  </CTAButton>
                </div>
              </GlassCard>
            </RevealItem>
            <RevealItem>
              <GlassCard tone="light" className="flex h-full flex-col">
                <div className="flex items-center gap-2">
                  <Icon.Compass className="text-gold" />
                  <Badge tone="petrol">{FUNNEL.intensivo.price}</Badge>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-ivory">
                  {FUNNEL.intensivo.name}
                </h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-snug text-ivory/70">
                  Dos días en vivo para implementar las 9 fases del método y la parte de financiamiento, con
                  cupo limitado por cohorte.
                </p>
                <div className="mt-5">
                  <CTAButton to="/l/03-intensivo" variant="secondary" size="md" icon={<Icon.ArrowRight />}>
                    Ver el intensivo
                  </CTAButton>
                </div>
              </GlassCard>
            </RevealItem>
          </Stagger>
          <Reveal className="mt-6">
            <p className="text-center text-[13px] text-ivory/55">
              Sin compromiso. Primero la masterclass; lo demás, solo si tiene sentido para ti.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 6 · Mini credibilidad */}
      <Section tone="petrol" pad="md" texture={sectionBg('02-gracias-reserva', 5)}>
        <Container width="narrow" className="text-center">
          <Reveal>
            <Icon.Shield className="mx-auto text-3xl text-gold" />
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-ivory/80">
              Magic Capital es una firma educativa de {FOUNDERS.argenis.name} y {FOUNDERS.carmen.name}.
              Enseñamos tax deed en Florida y Pennsylvania trabajando con los portales públicos del condado,
              con foco en el criterio antes que en la promesa.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 7 · FAQ */}
      <Section tone="ivory" pad="lg" texture={sectionBg('02-gracias-reserva', 6)}>
        <Container>
          <SectionHeader kicker="Preguntas frecuentes" title="Antes de vernos en vivo" />
          <div className="mt-10">
            <FAQAccordion items={FAQ} />
          </div>
        </Container>
      </Section>
    </LandingLayout>
  )
}

/** Botón de calendario con los datos fijos de la masterclass (mock). */
function CalendarMasterclassButton({ variant }: { variant: 'secondary' | 'light' }) {
  return (
    <CalendarButton
      variant={variant}
      title="Masterclass Magic Capital"
      description="Cómo Adquirir Propiedades en Subasta Paso a Paso — masterclass gratis, en vivo y en español. El enlace de Zoom llega por WhatsApp y correo."
      start="20260626T230000Z"
      end="20260627T000000Z"
    />
  )
}
