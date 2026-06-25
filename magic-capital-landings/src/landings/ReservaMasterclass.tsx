import {
  Section,
  Container,
  DisplayHeading,
  SectionHeader,
  GlassCard,
  CTAButton,
  Icon,
} from '../components/primitives'
import { Reveal, Stagger, RevealItem } from '../components/motion'
import {
  MAP9Phases,
  ForWhomColumns,
  YesNoColumns,
  TrustBar,
  FAQAccordion,
  PropertyShowcase,
  CountdownTimer,
} from '../components/blocks'
import { LandingHero, LandingLayout } from '../components/shell'
import { Img } from '../components/media'
import { LeadForm } from '../components/forms'
import { MAP9_PHASES, MASTERCLASS, waLink } from '../content/brand'
import { img, LANDING_BANNER } from '../content/images'
import { sectionBg } from '../content/section-backgrounds'

const CAMBIOS = [
  { from: 'Adivinar qué comprar', to: 'Filtro de seguridad', icon: <Icon.Filter /> },
  { from: 'Vaciar tus ahorros', to: 'Estructurar capital', icon: <Icon.Percent /> },
  { from: 'Contactos secretos', to: 'Portales públicos', icon: <Icon.Globe /> },
]

const APRENDERAS = [
  'Las 9 fases del Método MAP-9 para analizar una subasta.',
  'Cómo descartar las propiedades problemáticas antes de comprar.',
  'Cómo fondear con crédito empresarial al 0% (APR promocional).',
  'Cómo calcular el capital total de entrada antes de pujar.',
]

const QUE_ESPERAR = [
  { icon: <Icon.Clock />, t: 'Duración', d: '~60 min + preguntas en vivo' },
  { icon: <Icon.Globe />, t: 'Dónde', d: `100% online por ${MASTERCLASS.plataforma}, en español` },
  { icon: <Icon.Document />, t: 'Qué traer', d: 'Papel, lápiz y el condado que te interesa' },
]

const FAQ = [
  { q: '¿Esto es una estafa?', a: 'Tienes razón en dudar. Te mostramos el proceso público del condado —calendarios, números de caso, listados verificables por cualquiera. Exigimos que desconfíes.' },
  { q: '¿Cuánto dinero necesito?', a: 'Hablamos de un capital de entrada razonable (puja + fees + revisión del título + contingencia). En la masterclass te enseñamos a estimarlo; nunca a pujar por intuición.' },
  { q: '¿Necesito inglés o papeles?', a: 'Todo es en español neutro. Es una sesión educativa sobre un proceso público; para operar y estructurar crédito, los requisitos varían por estado, condado y emisor, y siempre recomendamos verificación local.' },
  { q: '¿Queda grabada?', a: 'Es una experiencia en vivo. Si habilitamos una repetición, te avisamos por WhatsApp y correo.' },
]

export default function ReservaMasterclass() {
  return (
    <LandingLayout waMessage="Hola, quiero reservar mi lugar en la masterclass gratis.">
      {/* 1 · Hero a una pantalla: contador → H1 → video protagonista → botón siempre visible */}
      <LandingHero
        tone="charcoal"
        fillViewport
        image={{
          src: img('01', '01-reserva-masterclass__hero-fundadores-trabajando.png'),
          alt: 'Argenis y Carmen, fundadores de Magic Capital',
          focal: '50% 35%',
          scrim: 'full',
        }}
        countdown={{ targetISO: MASTERCLASS.fechaISO, label: 'La próxima clase en vivo empieza en' }}
        banner={{ src: LANDING_BANNER['01'], alt: 'Masterclass gratis — Cómo adquirir propiedades en subasta, paso a paso, con Argenis y Carmen', ratio: '4x5' }}
        title={
          <span className="uppercase">
            Cómo adquirir <span className="text-gold-metallic">propiedades en subasta</span>{' '}
            <span className="block text-[0.62em] font-medium tracking-[0.04em] text-ivory/85">paso a paso</span>
          </span>
        }
        actions={
          <CTAButton
            onClick={() => document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' })}
            icon={<Icon.ArrowRight />}
            size="lg"
            magnetic
          >
            Reservar mi lugar
          </CTAButton>
        }
      />

      {/* 1b · Formulario de reserva (el botón del hero hace scroll hasta aquí) */}
      <Section id="reservar" tone="charcoal" pad="lg" className="scroll-mt-16">
        <Container width="narrow" className="text-center">
          <h2 className="font-display text-2xl font-semibold text-ivory">Reserva tu cupo gratis</h2>
          <p className="mt-2 text-[14px] text-ivory/60">Tu nombre y WhatsApp. Te enviamos el enlace de acceso.</p>
          <Reveal className="mx-auto mt-6 max-w-md text-left">
            <LeadForm ctaLabel="Reserva tu cupo gratis" redirectTo="/l/02-gracias-reserva" tone="dark" />
          </Reveal>
        </Container>
      </Section>

      {/* 2 · Qué aprenderás (problema + cambios + 9 fases, fusionado) */}
      <Section tone="ivory" pad="lg" texture={sectionBg('01-reserva-masterclass', 1)}>
        <Container>
          <SectionHeader
            kicker="De adivinar a decidir con criterio"
            title="La hipoteca tradicional se cierra. Te mostramos la otra puerta."
          />

          {/* Tres cambios */}
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {CAMBIOS.map((c) => (
              <RevealItem key={c.to}>
                <GlassCard tone="solid" className="h-full">
                  <div className="text-2xl text-gold">{c.icon}</div>
                  <div className="mt-3 text-[14px] text-ivory/55 line-through">{c.from}</div>
                  <div className="mt-1 flex items-center gap-2 font-display text-lg font-semibold text-ivory">
                    <Icon.ArrowRight className="text-gold" /> {c.to}
                  </div>
                </GlassCard>
              </RevealItem>
            ))}
          </Stagger>

          {/* Propiedad protagonista + las 9 fases */}
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Reveal>
                <PropertyShowcase
                  src={img('01', '01-reserva-masterclass__opportunity-vivienda-modesta-fl--3x2.png')}
                  alt="Vivienda modesta en un barrio de Florida, del tipo que aparece en el mercado secundario de liquidaciones fiscales."
                  ratio="3x2"
                  region="FL"
                  tone="dark"
                  caption="Imagen ilustrativa del tipo de vivienda que se transfiere en el mercado secundario; varía por estado, condado y propiedad."
                />
              </Reveal>
              <Stagger className="mt-6 space-y-2.5">
                {APRENDERAS.map((a) => (
                  <RevealItem key={a} subtle>
                    <div className="flex gap-3">
                      <Icon.Check className="mt-1 shrink-0 text-gold" />
                      <p className="text-[15px] leading-snug text-ivory/80">{a}</p>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>
            </div>
            <div>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                El Método MAP-9, fase por fase
              </div>
              <Reveal>
                <MAP9Phases phases={MAP9_PHASES} tone="dark" />
              </Reveal>
              <p className="mt-5 rounded-xl bg-white/[0.05] px-4 py-3 text-[14px] text-ivory/70">
                El filtro de seguridad (fases 5–9) es el corazón: primero, qué <strong className="text-ivory">NO</strong>{' '}
                comprar. No prometemos resultados — te damos el <strong className="text-ivory">sistema</strong> y la{' '}
                <strong className="text-ivory">claridad</strong> para decidir.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3 · Para quién es / no */}
      <Section tone="ivory-dim" texture={sectionBg('01-reserva-masterclass', 5)}>
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

      {/* 4 · Quiénes son */}
      <Section tone="ivory" pad="lg" texture={sectionBg('01-reserva-masterclass', 6)}>
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <Img
                src={img('01', '01-quienes-fundadores--16x9.png')}
                alt="Argenis Aguilera y Carmen Espinosa"
                className="aspect-[16/10] w-full rounded-2xl shadow-glass-dark gold-hairline"
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

      {/* 5 · Confianza compacta (qué esperar + esto SÍ / esto NO; nutrido con el filtro forense) */}
      <Section
        tone="ivory-dim"
        pad="lg"
        texture={{
          src: img('01', '01-reserva-masterclass__filtro-forense-no-comprar--16x9--codex-v02.png'),
          opacity: 0.1,
          focal: '50% 45%',
        }}
      >
        <Container>
          <SectionHeader kicker="Transparencia anti-estafa" title="Qué esperar — y qué no prometemos" />

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-3">
            {QUE_ESPERAR.map((a) => (
              <RevealItem key={a.t}>
                <GlassCard tone="solid" className="h-full">
                  <div className="text-2xl text-gold">{a.icon}</div>
                  <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">{a.t}</div>
                  <p className="mt-1 text-[14px] leading-snug text-ivory/80">{a.d}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </Stagger>

          <div className="mt-8">
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

          <div className="mt-8">
            <TrustBar
              items={[
                { icon: <Icon.Shield />, text: 'Exigimos que desconfíes: es un proceso público y verificable.' },
                { icon: <Icon.Filter />, text: 'Te enseñamos primero qué NO comprar.' },
                { icon: <Icon.Globe />, text: 'En vivo y en español.' },
                { icon: <Icon.Calendar />, text: 'Fecha y hora reales — sin temporizadores que se reinician solos.' },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* 6 · FAQ */}
      <Section tone="ivory" texture={sectionBg('01-reserva-masterclass', 9)}>
        <Container>
          <SectionHeader kicker="Preguntas frecuentes" title="Lo que la gente nos pregunta" />
          <div className="mt-10">
            <FAQAccordion items={FAQ} />
          </div>
        </Container>
      </Section>

      {/* 7 · CTA final */}
      <Section tone="charcoal" pad="lg" aura texture={sectionBg('01-reserva-masterclass', 10)}>
        <Container width="narrow" className="text-center">
          <DisplayHeading size="lg">Reserva tu cupo y empieza por entender</DisplayHeading>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ivory/70">
            Gratis, en vivo y en español. Tu estancamiento no es por falta de dinero, es por falta de dirección
            e información correcta.
          </p>
          <div className="mt-6">
            <CountdownTimer targetISO={MASTERCLASS.fechaISO} className="items-center" />
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTAButton href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} icon={<Icon.ArrowRight />} magnetic>
              Reserva tu cupo gratis
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
