import {
  Section,
  Container,
  Kicker,
  DisplayHeading,
  SectionHeader,
  GlassCard,
  CTAButton,
  Badge,
  Footnote,
  Icon,
} from '../components/primitives'
import { Reveal, Stagger, RevealItem } from '../components/motion'
import { FAQAccordion } from '../components/blocks'
import type { QA } from '../components/blocks'
import { Hero, LandingLayout } from '../components/shell'
import { Img } from '../components/media'
import { FOUNDERS, CONTACT, COHORTE, waLink } from '../content/brand'
import { img } from '../content/images'
import { FIGURE_LABELS } from '../content/compliance'

// ── Mensaje precargado del WhatsApp flotante (lo renderiza LandingLayout). ──
const WA_GENERAL = 'Hola, acabo de reservar mi lugar en el Intensivo MAP-9 y tengo una consulta.'
const WA_GRUPO = 'Hola, soy alumno del Intensivo MAP-9 y quiero unirme al grupo de WhatsApp.'
const WA_SOPORTE = 'Hola, necesito ayuda con mi acceso al Intensivo MAP-9.'

// Datos de cohorte centralizados en brand.ts (valores demo — sustituir por los reales).
const FECHA_INTENSIVO = COHORTE.intensivoFecha
const HORARIO_SOPORTE = COHORTE.soporteHorario

type Paso = {
  icon: React.ReactNode
  t: string
  d: string
  /** Renderiza un CTA de WhatsApp dentro de la tarjeta (paso del grupo). */
  wa?: boolean
}

const PASOS: readonly Paso[] = [
  {
    icon: <Icon.Document />,
    t: 'Revisa tu correo',
    d: 'En minutos te llega el acceso completo al área de miembros. Si no lo ves, revisa spam o promociones y márcalo como seguro.',
  },
  {
    icon: <Icon.Whatsapp />,
    t: 'Únete al grupo de WhatsApp',
    d: 'Ahí van los recordatorios, el enlace de la sesión en vivo y el soporte rápido entre alumnos del Intensivo.',
    wa: true,
  },
  {
    icon: <Icon.Calendar />,
    t: 'Agenda la fecha',
    d: `Tu cohorte es el ${FECHA_INTENSIVO}. Anótala y bloquea el calendario completo: el Intensivo es en vivo y se aprovecha asistiendo.`,
  },
  {
    icon: <Icon.Sparkles />,
    t: 'Encuentra tus 5 bonos',
    d: 'En el área de miembros ya tienes tus recursos de apoyo: plantillas, checklists y materiales para acompañar cada fase del método.',
  },
]

const PREPARACION: readonly string[] = [
  'Conéctate desde una pantalla cómoda: trabajaremos sobre portales públicos y hojas de cálculo en vivo.',
  'Ten a mano libreta o notas: vas a registrar criterios, no solo escuchar.',
  'Reserva el bloque completo en tu calendario y evita interrupciones.',
  'Trae preguntas concretas: condados que te interesan, dudas reales, casos que viste.',
]

const MENTORIA_BULLETS: readonly string[] = [
  'Sesiones 1:1 con Argenis para aplicar el método MAP-9 a tus propiedades reales.',
  'Sesiones 1:1 con Carmen para estructurar tu crédito empresarial al 0% (APR promocional) según tu perfil.',
  'Acompañamiento hasta entrar con criterio a tu primera subasta, paso a paso.',
]

const FAQ: readonly QA[] = [
  {
    q: '¿Cuándo es el Intensivo?',
    a: `Tu cohorte está programada para el ${FECHA_INTENSIVO}. La fecha, la hora y el enlace de acceso te llegan por correo y por el grupo de WhatsApp. Es en vivo: te recomendamos reservar el bloque completo en tu calendario.`,
  },
  {
    q: '¿Queda grabado?',
    a: 'Sí. Si no puedes asistir en vivo a alguna parte, la grabación queda disponible en el área de miembros. Aun así, el mayor valor está en participar en vivo y resolver tus dudas en el momento.',
  },
  {
    q: '¿El Intensivo incluye el capital para comprar en subasta?',
    a: 'No. El Intensivo es formación: te enseña el método para analizar, filtrar y decidir con criterio, y cómo se estructura el financiamiento. No es un fondo ni te entregamos dinero para pujar. El capital lo aportas tú o lo fondeas con crédito empresarial según tu propia elegibilidad.',
  },
  {
    q: '¿Me aprueban el crédito empresarial al 0%?',
    a: `No garantizamos aprobación. Te enseñamos cómo se estructura el perfil para acceder a tarjetas de negocio con APR promocional introductorio, pero la elegibilidad, el límite y la aprobación dependen del emisor y de tu perfil, y suelen requerir garantía personal. ${FIGURE_LABELS.credito0}`,
  },
  {
    q: '¿Esto reemplaza a un abogado o asesor?',
    a: 'No. Es información educativa, no asesoría legal, fiscal, crediticia ni de inversión individual. Las reglas de tax deed varían por estado y condado. Antes de comprar en subasta o usar crédito para invertir, consulta a un abogado local, title professional y/o asesor financiero cualificado.',
  },
]

export default function GraciasIntensivo() {
  return (
    <LandingLayout waMessage={WA_GENERAL}>
      {/* 1 · Confirmación (editorial) */}
      <Hero
        tone="charcoal"
        image={{
          src: img('04', '04-gracias-compra-intensivo__hero-bienvenida-area-miembros.png'),
          alt: 'Bienvenida al área de miembros del Intensivo MAP-9',
          focal: '50% 35%',
          scrim: 'left',
        }}
      >
        <div className="max-w-2xl">
          <Kicker>Pago confirmado</Kicker>
          <DisplayHeading as="h1" size="xl" className="mt-4">
            Bienvenido al Intensivo MAP-9
          </DisplayHeading>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ivory/75">
            Tu lugar está reservado. El acceso completo llega a tu correo en minutos.
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ivory/60">
            Tomaste una buena decisión: aprenderás a entrar en tax deed con criterio antes de arriesgar un
            dólar.
          </p>
          <div className="mt-7">
            <Badge tone="ivory">
              <Icon.Check /> Acceso en camino
            </Badge>
          </div>
        </div>
      </Hero>

      {/* 2 · Próximos pasos */}
      <Section tone="ivory" pad="lg">
        <Container>
          <SectionHeader
            kicker="Empieza por aquí"
            title="Tus próximos pasos"
            intro="Cuatro acciones rápidas para no perder nada y llegar listo al día del Intensivo."
          />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PASOS.map((p, i) => (
              <RevealItem key={p.t}>
                <GlassCard tone="solid" className="flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-petrol/10 font-display text-sm font-semibold text-petrol">
                      {i + 1}
                    </span>
                    <span className="text-xl text-petrol">{p.icon}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-charcoal">{p.t}</h3>
                  <p className="mt-2 text-[14.5px] leading-snug text-charcoal/70">{p.d}</p>
                  {p.wa && (
                    <div className="mt-4">
                      <CTAButton
                        href={waLink(WA_GRUPO)}
                        variant="whatsapp"
                        size="md"
                        icon={<Icon.Whatsapp />}
                      >
                        Unirme al grupo
                      </CTAButton>
                    </div>
                  )}
                </GlassCard>
              </RevealItem>
            ))}
          </Stagger>

          {/* Vista del área de miembros / bonos (9x16) */}
          <Reveal className="mt-10">
            <div className="mx-auto grid max-w-3xl items-center gap-8 sm:grid-cols-[0.7fr_1fr]">
              <Img
                src={img('04', '04-gracias-compra-intensivo__area-miembros-bonos.png')}
                alt="Área de miembros con los 5 bonos del Intensivo"
                kenBurns={false}
                focal="50% 50%"
                className="mx-auto w-full max-w-[220px] rounded-2xl ring-1 ring-charcoal/10 aspect-[9/16]"
              />
              <div>
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  Tus 5 bonos ya están adentro
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">
                  Al entrar al área de miembros encontrarás los recursos que acompañan cada fase del método:
                  plantillas para tus números, checklists de filtrado y materiales de apoyo. Están listos
                  para usarse desde el primer día.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 3 · Cómo prepararte */}
      <Section tone="ivory-dim">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader
                align="left"
                kicker="Para aprovecharlo de verdad"
                title="Cómo prepararte"
              />
              <Stagger className="mt-6 space-y-3">
                {PREPARACION.map((b) => (
                  <RevealItem key={b} subtle>
                    <div className="flex gap-3">
                      <Icon.Check className="mt-1 shrink-0 text-olive" />
                      <p className="text-[15px] leading-snug text-charcoal/80">{b}</p>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>
              <p className="mt-6 text-[15px] italic leading-relaxed text-smoke">
                Lo primero que vemos es qué propiedades NO comprar — el filtro antes del apuro.
              </p>
            </div>
            <Reveal>
              <Img
                src={img('04', '04-gracias-compra-intensivo__preparacion-escritorio-intensivo.png')}
                alt="Escritorio preparado para la sesión del Intensivo"
                focal="50% 50%"
                className="w-full rounded-2xl ring-1 ring-charcoal/10 aspect-square"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 4 · OTO suave a la Mentoría 1:1 (honesto, sin presión) */}
      <Section tone="charcoal" pad="lg">
        <Container width="narrow">
          <Reveal>
            <GlassCard tone="dark" className="p-7 sm:p-10">
              <Badge tone="ivory">Opcional — solo si lo necesitas</Badge>
              <DisplayHeading size="md" className="mt-5 text-ivory">
                ¿Quieres acompañamiento personalizado hasta tu primera subasta?
              </DisplayHeading>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ivory/75">
                El Intensivo te da el método completo para empezar por tu cuenta. Algunos alumnos prefieren
                hacerlo acompañados: revisar TUS condados, TUS números y TU primera puja con nosotros, paso a
                paso. Eso es la Mentoría 1:1: tres módulos de trabajo directo con {FOUNDERS.argenis.short} y{' '}
                {FOUNDERS.carmen.short}.
              </p>

              <ul className="mt-6 space-y-3">
                {MENTORIA_BULLETS.map((b) => (
                  <li key={b} className="flex gap-3">
                    <Icon.Check className="mt-1 shrink-0 text-olive" />
                    <span className="text-[14.5px] leading-snug text-ivory/85">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-xl bg-white/[0.05] px-4 py-3.5">
                <p className="text-[14px] leading-relaxed text-ivory/70">
                  No la necesitas para empezar. Es para quien quiere ir acompañado y avanzar más rápido con
                  menos dudas.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <CTAButton to="/l/05-mentoria" icon={<Icon.ArrowRight />}>
                  Conocer la Mentoría 1:1
                </CTAButton>
              </div>
              <Footnote tone="dark" className="mt-4">
                La mentoría es una inversión aparte. En su página encontrarás el detalle, el precio y los
                planes de pago.
              </Footnote>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>

      {/* 5 · Soporte */}
      <Section tone="ivory" pad="md">
        <Container width="narrow">
          <Reveal>
            <GlassCard tone="solid" className="text-center">
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-petrol/10 text-2xl text-petrol">
                <Icon.Whatsapp />
              </div>
              <h3 className="font-display text-2xl font-semibold text-charcoal">
                ¿Necesitas ayuda? Escríbenos
              </h3>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-charcoal/70">
                Si algo del acceso, el calendario o los bonos no te queda claro, estamos para resolverlo.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <CTAButton href={waLink(WA_SOPORTE)} variant="whatsapp" icon={<Icon.Whatsapp />}>
                  Escríbenos por WhatsApp
                </CTAButton>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-petrol underline-offset-4 hover:underline"
                >
                  <Icon.Document /> {CONTACT.email}
                </a>
              </div>
              <p className="mt-5 text-[13px] text-smoke">Horario de atención: {HORARIO_SOPORTE}</p>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>

      {/* 6 · FAQ */}
      <Section tone="ivory-dim" pad="lg">
        <Container>
          <SectionHeader kicker="Antes de empezar" title="Preguntas frecuentes" />
          <div className="mt-10">
            <FAQAccordion items={[...FAQ]} />
          </div>
        </Container>
      </Section>
    </LandingLayout>
  )
}
