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
import { MAP9Phases, ForWhomColumns, YesNoColumns, StatCards, TrustBar, FAQAccordion } from '../components/blocks'
import { Hero, LandingLayout } from '../components/shell'
import { Img } from '../components/media'
import { LeadForm } from '../components/forms'
import { MAP9_PHASES, waLink } from '../content/brand'
import { img } from '../content/images'

const CAMBIOS = [
  { from: 'Adivinar qué comprar', to: 'Filtrado forense', icon: <Icon.Filter /> },
  { from: 'Vaciar tus ahorros', to: 'Estructurar capital', icon: <Icon.Percent /> },
  { from: 'Contactos secretos', to: 'Portales públicos', icon: <Icon.Globe /> },
]

const APRENDERAS = [
  'Las 9 fases del Método MAP-9 para analizar una subasta.',
  'Cómo descartar propiedades tóxicas (filtrado forense).',
  'Cómo fondear con crédito empresarial al 0% (APR promocional).',
  'Cómo calcular el capital total de entrada antes de pujar.',
]

const AGENDA = [
  { icon: <Icon.Calendar />, t: 'Cuándo', d: 'En vivo, cada semana · te enviamos el día y la hora en tu zona al reservar' },
  { icon: <Icon.Clock />, t: 'Duración', d: '~60 minutos + preguntas en vivo' },
  { icon: <Icon.Globe />, t: 'Dónde', d: '100% online por Zoom, en español neutro' },
  { icon: <Icon.Document />, t: 'Qué traer', d: 'Papel y lápiz, y el condado o estado que te interesa' },
]

const FAQ = [
  { q: '¿Esto es una estafa?', a: 'Tienes razón en dudar. Por eso te mostramos el proceso público del condado: calendarios, números de caso y listados que cualquiera puede verificar. Exigimos que desconfíes.' },
  { q: '¿Cuánto dinero necesito?', a: 'Para operar con criterio solemos hablar de un capital de entrada razonable (puja + fees + title + contingencia). En la masterclass te enseñamos a estimarlo; no te pediremos pujar por intuición.' },
  { q: '¿Necesito papeles o residencia?', a: 'Es una sesión educativa sobre un proceso público. Para operar y para estructurar crédito, los requisitos varían por estado, condado y emisor; siempre recomendamos verificación local.' },
  { q: '¿Necesito inglés?', a: 'No. Todo es en español neutro.' },
  { q: '¿Cuánto dura?', a: 'Alrededor de 60 minutos, con espacio para preguntas en vivo.' },
  { q: '¿Queda grabada?', a: 'Es una experiencia en vivo. Si habilitamos una repetición, te avisamos por WhatsApp y correo.' },
]

export default function ReservaMasterclass() {
  return (
    <LandingLayout waMessage="Hola, quiero reservar mi lugar en la masterclass gratis.">
      {/* 1 · Hero + formulario */}
      <Hero
        tone="charcoal"
        image={{
          src: img('01', '01-reserva-masterclass__hero-fundadores-trabajando.png'),
          alt: 'Argenis y Carmen trabajando',
          focal: '50% 35%',
          scrim: 'left',
        }}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Kicker>Masterclass gratis en vivo · cada semana · en español</Kicker>
            <DisplayHeading as="h1" size="xl" className="mt-4">
              Cómo adquirir propiedades en subasta, paso a paso.
            </DisplayHeading>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ivory/75">
              Te mostramos las dos piezas que casi nadie enseña juntas: el <strong className="text-ivory">Método
              MAP-9</strong> para analizar y descartar propiedades antes de pujar, y cómo estructurar{' '}
              <strong className="text-ivory">crédito empresarial al 0%</strong> para fondear la compra sin
              liquidar tus ahorros — antes de tu primera subasta tax deed.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="ivory"><Icon.Check /> En vivo</Badge>
              <Badge tone="ivory"><Icon.Check /> En español</Badge>
              <Badge tone="ivory"><Icon.Check /> Sin compromiso</Badge>
            </div>
          </div>

          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-charcoal/70 p-6 shadow-glass-dark backdrop-blur-md">
              <h2 className="font-display text-xl font-semibold text-ivory">Reserva tu lugar gratis</h2>
              <p className="mt-1 text-[13.5px] text-ivory/60">Nombre y WhatsApp. Te enviamos el enlace.</p>
              <div className="mt-4">
                <LeadForm ctaLabel="Reservar mi lugar gratis" redirectTo="/l/02-gracias-reserva" tone="dark" />
              </div>
            </div>
          </Reveal>
        </div>
      </Hero>

      {/* 2 · El problema (reframe editorial) */}
      <Section tone="ivory" pad="lg">
        <Container>
          <SectionHeader
            kicker="El sistema te dejó fuera"
            title="La hipoteca tradicional se está cerrando. Te mostramos la otra puerta."
            intro="La inasequibilidad del mercado es, en parte, una ilusión causada por depender de la hipoteca tradicional. La transferencia real de patrimonio ocurre en otro lugar: el mercado secundario de liquidaciones fiscales."
          />
          <div className="mt-10">
            <StatCards
              stats={[
                { value: '+47%', label: 'Aumento acumulado de precios de vivienda en años recientes.', footnote: 'Dato ilustrativo de mercado; varía por región y periodo.' },
                { value: 'Tasas altas', label: 'Las tasas hipotecarias en niveles que reducen tu poder de compra.' },
                { value: 'Ahorros quietos', label: 'El dinero parado pierde frente a la inflación, sin ponerse a trabajar.' },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* 3 · Trust bar */}
      <Section tone="ivory-dim" pad="md">
        <Container>
          <TrustBar
            items={[
              { icon: <Icon.Shield />, text: 'Exigimos que desconfíes: es un proceso público y verificable.' },
              { icon: <Icon.Filter />, text: 'Te enseñamos primero qué NO comprar.' },
              { icon: <Icon.Globe />, text: 'En vivo y en español.' },
              { icon: <Icon.Check />, text: 'Sin urgencia falsa ni cuenta regresiva.' },
            ]}
          />
        </Container>
      </Section>

      {/* 4 · Tres cambios */}
      <Section tone="ivory" pad="lg">
        <Container>
          <SectionHeader kicker="Lo que cambia para ti" title="De adivinar a decidir con criterio" />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {CAMBIOS.map((c) => (
              <RevealItem key={c.to}>
                <GlassCard tone="solid" className="h-full">
                  <div className="text-2xl text-petrol">{c.icon}</div>
                  <div className="mt-3 text-[14px] text-smoke line-through">{c.from}</div>
                  <div className="mt-1 flex items-center gap-2 font-display text-lg font-semibold text-charcoal">
                    <Icon.ArrowRight className="text-olive" /> {c.to}
                  </div>
                </GlassCard>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* 5 · Qué aprenderás (9 fases) */}
      <Section tone="charcoal" pad="lg">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeader
                align="left"
                tone="dark"
                kicker="Qué aprenderás"
                title="El Método MAP-9, fase por fase"
                intro="El filtrado forense (fases 5–9) es el corazón: primero, qué NO comprar."
              />
              <Stagger className="mt-6 space-y-2.5">
                {APRENDERAS.map((a) => (
                  <RevealItem key={a} subtle>
                    <div className="flex gap-3">
                      <Icon.Check className="mt-1 shrink-0 text-olive" />
                      <p className="text-[15px] leading-snug text-ivory/80">{a}</p>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>
              <p className="mt-5 rounded-xl bg-white/[0.05] px-4 py-3 text-[14px] text-ivory/70">
                No prometemos resultados. Te damos el <strong className="text-ivory">sistema</strong> y la{' '}
                <strong className="text-ivory">claridad</strong> para decidir.
              </p>
            </div>
            <Reveal>
              <MAP9Phases phases={MAP9_PHASES} tone="dark" />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 6 · Para quién / no */}
      <Section tone="ivory-dim">
        <Container>
          <SectionHeader kicker="Honestidad" title="Para quién es (y para quién no)" />
          <div className="mt-10">
            <ForWhomColumns
              left={{
                heading: 'Para ti, si…',
                variant: 'positive',
                items: [
                  'Quieres entender el proceso público sin adivinar.',
                  'Tienes (o estás reuniendo) un capital de $1k–$20k.',
                  'Prefieres aprender qué descartar antes de comprar.',
                ],
              }}
              right={{
                heading: 'No es para ti, si…',
                variant: 'negative',
                items: [
                  'Buscas hacerte rico rápido.',
                  'No vas a verificar la información en los sitios del condado.',
                  'Esperas que alguien invierta por ti sin entender el riesgo.',
                ],
              }}
            />
          </div>
        </Container>
      </Section>

      {/* 7 · Quiénes son */}
      <Section tone="ivory" pad="lg">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <Img
                src={img('01', '01-quienes-fundadores--16x9.png')}
                alt="Argenis Aguilera y Carmen Espinosa"
                className="aspect-[16/10] w-full rounded-2xl shadow-glass"
                focal="50% 30%"
              />
            </Reveal>
            <div>
              <SectionHeader
                align="left"
                kicker="Quiénes son"
                title="Argenis y Carmen — ejecutores, no influencers"
                intro="Argenis opera y enseña el Método MAP-9 (la oportunidad). Carmen estructura empresa y crédito empresarial al 0% (el capital). Dos expertos, las dos piezas del sistema."
              />
              <div className="mt-5">
                <CTAButton to="/l/07-autoridad" variant="secondary" size="md" icon={<Icon.ArrowRight />}>
                  Conoce su historia
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8 · Agenda */}
      <Section tone="ivory-dim">
        <Container>
          <SectionHeader kicker="La masterclass" title="Qué esperar el día de la sesión" />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AGENDA.map((a) => (
              <RevealItem key={a.t}>
                <GlassCard tone="solid" className="h-full">
                  <div className="text-2xl text-petrol">{a.icon}</div>
                  <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-olive">{a.t}</div>
                  <p className="mt-1 text-[14px] leading-snug text-charcoal/80">{a.d}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* 9 · Esto SÍ / Esto NO */}
      <Section tone="ivory" pad="lg">
        <Container>
          <SectionHeader kicker="Transparencia anti-estafa" title="Esto SÍ · Esto NO" />
          <div className="mt-10">
            <YesNoColumns
              left={{
                heading: 'Esto SÍ',
                variant: 'positive',
                items: [
                  'Educación sobre un proceso público.',
                  'Te mostramos cómo descartar propiedades.',
                  'Hablamos de costos y de riesgos.',
                ],
              }}
              right={{
                heading: 'Esto NO',
                variant: 'negative',
                items: [
                  'No prometemos ingresos, ganancias ni "título limpio".',
                  'No decimos "sin riesgo" ni "garantizado".',
                  'No aprobamos crédito ni garantizamos límites.',
                ],
              }}
            />
          </div>
        </Container>
      </Section>

      {/* 10 · FAQ */}
      <Section tone="ivory-dim">
        <Container>
          <SectionHeader kicker="Preguntas frecuentes" title="Lo que la gente nos pregunta" />
          <div className="mt-10">
            <FAQAccordion items={FAQ} />
          </div>
        </Container>
      </Section>

      {/* 11 · CTA final */}
      <Section tone="charcoal" pad="lg" aura>
        <Container width="narrow" className="text-center">
          <DisplayHeading size="lg">Reserva tu lugar y empieza por entender</DisplayHeading>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ivory/70">
            Gratis, en vivo y en español. Tu estancamiento no es por falta de dinero, es por falta de dirección
            e información correcta.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTAButton href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} icon={<Icon.ArrowRight />} magnetic>
              Reservar mi lugar gratis
            </CTAButton>
            <CTAButton href={waLink('Hola, quiero reservar mi lugar en la masterclass gratis.')} variant="whatsapp" icon={<Icon.Whatsapp />}>
              Escríbenos por WhatsApp
            </CTAButton>
          </div>
        </Container>
      </Section>
    </LandingLayout>
  )
}
