import { useState } from 'react'
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
import { Reveal, Stagger, RevealItem, PinnedSequence } from '../components/motion'
import { MAP9Phases, YesNoColumns, CaseBreakdown, CapitalCalc, FAQAccordion } from '../components/blocks'
import { Hero, LandingLayout } from '../components/shell'
import { Img } from '../components/media'
import { CheckoutMock } from '../components/forms'
import { MAP9_PHASES, waLink } from '../content/brand'
import { img } from '../content/images'
import { FIGURE_LABELS } from '../content/compliance'
import { cn } from '../lib/cn'

const VIERNES = [
  'Estructura de negocio: cómo montarla bien en EE.UU.',
  'Protección y seguridad: protección legal, seguros, compliance básico.',
  'Crédito empresarial: cómo preparar tu perfil de crédito de negocio.',
  'Financiamiento 0%: cómo acceder a líneas con APR promocional, con criterio (elegibilidad, garantía personal, salida).',
  'Preguntas y respuestas en vivo.',
]

const TOOLS = [
  { t: 'Guía PDF del MAP-9', d: 'Las 9 fases, paso a paso. Tu entregable base.', base: true },
  { t: 'Matriz de detección de pasivos ocultos', d: 'Para no comprar un problema legal.' },
  { t: 'Directorio interactivo de jurisdicciones', d: 'Florida y Pennsylvania.' },
  { t: 'Estructuras operativas de LLC', d: 'Plantillas (no es asesoría legal).' },
  { t: 'Índice de proveedores de crédito de negocio', d: 'Net-30 para construir perfil.' },
  { t: 'Calculadora de capital de entrada', d: 'Estima cuánto necesitas antes de pujar.' },
]

const RISK_REDUCERS = [
  { icon: <Icon.Play />, t: 'Repetición', d: 'Acceso 7–14 días si no puedes en vivo o quieres repasar.' },
  { icon: <Icon.Users />, t: 'Sesión de seguimiento', d: 'Espacio grupal posterior para dudas de ejecución.' },
  { icon: <Icon.ArrowUpRight />, t: 'Crédito del ticket', d: 'El 100% del ticket se aplica a la Mentoría 1:1 si avanzas dentro del plazo definido.' },
]

const FAQ = [
  { q: '¿Es un curso grabado?', a: 'No. Es implementación en vivo, en cohorte. Construyes el proceso con nosotros en tiempo real; si habilitamos repetición, es para repasar, no para reemplazar el en vivo.' },
  { q: '¿Garantizan que gane dinero?', a: 'No. Te damos el sistema y la claridad para decidir con criterio. No prometemos ingresos, montos ni resultados; dependen del mercado, el condado y tu ejecución.' },
  { q: '¿Incluye el capital para comprar?', a: 'No. El intensivo no incluye el capital de entrada; te enseña a estimarlo y a no sobre-extenderte.' },
  { q: '¿Aprueban el crédito 0%?', a: 'No. Describimos cómo funciona: tarjetas de negocio con APR promocional sujeto a elegibilidad del emisor y posible garantía personal. No prometemos montos ni aprobación.' },
  { q: '¿Qué pasa el viernes y el sábado?', a: 'Viernes: capital con Carmen (empresa, crédito, financiamiento 0%). Sábado: las 9 fases del MAP-9 con Argenis, ejecutando juntos.' },
]

export default function CompraIntensivo() {
  const [checkout, setCheckout] = useState(false)

  return (
    <LandingLayout waMessage="Hola, tengo una pregunta sobre el Intensivo MAP-9 ($297) antes de comprar.">
      {/* 1 · Hero */}
      <Hero
        tone="charcoal"
        image={{
          src: img('03', '03-compra-intensivo__hero-fundadores-sesion-vivo.png'),
          alt: 'Sesión en vivo del intensivo',
          focal: '50% 35%',
          scrim: 'left',
        }}
      >
        <div className="max-w-2xl">
          <Kicker>Intensivo MAP-9 · viernes + sábado · en vivo · cupo limitado</Kicker>
          <DisplayHeading as="h1" size="xl" className="mt-4">
            De mirar listados a ejecutar tu primera subasta con criterio.
          </DisplayHeading>
          <p className="mt-5 text-[17px] leading-relaxed text-ivory/75">
            Un fin de semana de implementación guiada. Viernes: el capital con Carmen. Sábado: las 9 fases del
            MAP-9 con Argenis. No es un curso grabado: construyes el proceso con nosotros, en vivo, y te llevas
            la Guía MAP-9.
          </p>
          <p className="mt-3 text-[14px] text-ivory/55">Cupos limitados por la capacidad real de la cohorte en vivo.</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <CTAButton onClick={() => setCheckout(true)} icon={<Icon.ArrowRight />}>
              Reservar mi asiento ($297)
            </CTAButton>
            <CTAButton href={waLink('Hola, tengo una pregunta sobre el Intensivo MAP-9 antes de comprar.')} variant="ghost">
              Preguntar por WhatsApp
            </CTAButton>
          </div>
        </div>
      </Hero>

      {/* 2 · Qué ES / qué NO ES */}
      <Section tone="ivory" pad="lg">
        <Container>
          <SectionHeader kicker="Para que sepas qué compras" title="Qué ES y qué NO ES el intensivo" />
          <div className="mt-10">
            <YesNoColumns
              left={{
                heading: 'Qué ES',
                variant: 'positive',
                items: [
                  'Implementación en vivo, en cohorte.',
                  'Plantillas y herramientas que usas durante la sesión.',
                  'Casos reales desglosados.',
                  'Espacio para preguntar y aplicar.',
                  'Te enseñamos qué NO comprar.',
                ],
              }}
              right={{
                heading: 'Qué NO ES',
                variant: 'negative',
                items: [
                  'Un curso grabado que ves solo.',
                  'Teoría sin ejecución.',
                  'Una promesa de ganancias o de aprobación de crédito.',
                  'Asesoría legal, fiscal o de inversión.',
                ],
              }}
            />
          </div>
        </Container>
      </Section>

      {/* 3a · Viernes con Carmen */}
      <Section tone="ivory-dim">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <Img
                src={img('03', '03-compra-intensivo__carmen-bloque-capital-viernes.png')}
                alt="Carmen explicando el bloque de capital"
                className="aspect-[4/5] w-full rounded-2xl shadow-glass sm:aspect-[4/3]"
                focal="50% 30%"
              />
            </Reveal>
            <div>
              <Badge tone="petrol"><Icon.Calendar /> Día 1 · Viernes</Badge>
              <SectionHeader
                align="left"
                className="mt-3"
                kicker="Con Carmen + Argenis"
                title="El capital: empresa, crédito y financiamiento 0%"
              />
              <Stagger className="mt-5 space-y-2.5">
                {VIERNES.map((v) => (
                  <RevealItem key={v} subtle>
                    <div className="flex gap-3">
                      <Icon.Check className="mt-1 shrink-0 text-olive" />
                      <p className="text-[14.5px] leading-snug text-charcoal/80">{v}</p>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>
              <div className="mt-4">
                <Footnote>{FIGURE_LABELS.credito0}</Footnote>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3b · Sábado · las 9 fases (PINNED) */}
      <Section tone="charcoal" pad="sm">
        <Container>
          <Badge tone="ivory"><Icon.Calendar /> Día 2 · Sábado</Badge>
          <SectionHeader
            tone="dark"
            className="mt-3"
            kicker="Con Argenis"
            title="Las 9 fases del MAP-9, una por una"
            intro="Desplázate para recorrer el método. El filtrado forense (fases 5–9) descarta propiedades tóxicas antes de pujar."
          />
        </Container>
        <PinnedSequence count={MAP9_PHASES.length} vhPerStep={40}>
          {(active) => (
            <Container>
              <div className="grid items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <div className="font-display text-6xl font-semibold tabular-nums text-olive">
                    {String(active + 1).padStart(2, '0')}
                  </div>
                  <div className="mt-2 font-display text-2xl font-semibold text-ivory">{MAP9_PHASES[active]}</div>
                  <div className="mt-2 text-[13px] uppercase tracking-[0.14em] text-ivory/45">
                    Fase {active + 1} de {MAP9_PHASES.length}
                    {active >= 4 && <span className="ml-2 text-olive">· filtrado forense</span>}
                  </div>
                </div>
                <MAP9Phases phases={MAP9_PHASES} revealedUpTo={active} tone="dark" />
              </div>
            </Container>
          )}
        </PinnedSequence>
      </Section>

      {/* 4 · Entregable + 5 herramientas */}
      <Section tone="ivory" pad="lg">
        <Container>
          <SectionHeader
            kicker="Tu entregable"
            title="Te vas con la Guía MAP-9 y 5 herramientas que usas durante el intensivo"
            intro="No PDFs para un cajón: herramientas que aplicas en vivo."
          />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((t) => (
              <RevealItem key={t.t}>
                <GlassCard tone="solid" className={cn('h-full', t.base && 'ring-1 ring-petrol/30')}>
                  {t.base ? (
                    <Badge tone="petrol">Base</Badge>
                  ) : (
                    <Icon.Document className="text-2xl text-olive" />
                  )}
                  <h3 className="mt-3 font-display text-base font-semibold text-charcoal">{t.t}</h3>
                  <p className="mt-1 text-[13.5px] leading-snug text-charcoal/70">{t.d}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* 5 · Caso real $7,500 */}
      <Section tone="charcoal" pad="lg">
        <Container width="narrow">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <SectionHeader
                align="left"
                tone="dark"
                kicker="Un caso real, con números a la vista"
                title="Washington County, Pennsylvania"
                intro="Lo usamos para enseñar el PROCESO y los COSTOS reales — no la ganancia."
              />
            </div>
            <CaseBreakdown
              tone="dark"
              lines={[
                { label: 'Adjudicación en subasta', amount: '$7,500', hint: 'La puja abre en la deuda fiscal' },
                { label: 'Fees del condado', amount: '$820' },
                { label: 'Title work / saneamiento', amount: '$1,500' },
                { label: 'Contingencia', amount: '$1,800' },
              ]}
              total="$11,620"
              footnote={FIGURE_LABELS.caso7500}
            />
          </div>
        </Container>
      </Section>

      {/* 6 · Transparencia de costos */}
      <Section tone="ivory" pad="lg">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader
                align="left"
                kicker="Te lo decimos antes de que pagues"
                title="Cuánto capital necesitas de verdad"
                intro="Para operar con criterio recomendamos ~$5k–$15k de capital de entrada total: puja + fees del condado + title work + contingencia + holding. El intensivo no incluye este capital; te enseña a estimarlo."
              />
              <p className="mt-5 rounded-xl bg-charcoal/[0.03] px-4 py-3 text-[14px] text-charcoal/75">
                Si hoy no tienes un rango razonable de capital, preferimos decírtelo ahora a que compres a ciegas.
              </p>
            </div>
            <Reveal>
              <CapitalCalc />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 7 · Oferta + ancla */}
      <Section tone="ivory-dim" pad="lg">
        <Container width="narrow" className="text-center">
          <SectionHeader kicker="Tu asiento en la cohorte en vivo" title="Una inversión que rinde en criterio" />
          <Reveal className="mt-8">
            <div className="mx-auto max-w-md rounded-2xl border border-charcoal/10 bg-white p-7 shadow-glass">
              <div className="flex items-center justify-center gap-3 text-smoke">
                <span className="text-lg line-through">$1,000</span>
                <span className="text-lg line-through">$500</span>
                <Icon.ArrowRight className="text-olive" />
              </div>
              <div className="mt-2 font-display text-5xl font-semibold text-charcoal">$297</div>
              <p className="mt-2 text-[13px] text-smoke">
                $1,000 y $500 son valores de referencia; el precio vigente es $297.
              </p>
              <ul className="mt-5 space-y-2 text-left text-[14px] text-charcoal/80">
                {['2 días en vivo (viernes capital + sábado 9 fases)', 'Guía PDF del MAP-9 + 5 herramientas', 'Caso real desglosado', 'Repetición y sesión de seguimiento'].map((b) => (
                  <li key={b} className="flex gap-2">
                    <Icon.Check className="mt-0.5 shrink-0 text-olive" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <CTAButton onClick={() => setCheckout(true)} size="lg" className="w-full">
                  Reservar mi asiento ($297)
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 8 · Reductores de riesgo */}
      <Section tone="ivory" pad="md">
        <Container>
          <SectionHeader kicker="Reservamos tu confianza, no solo tu asiento" title="Si algo no encaja, no te dejamos colgado" />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {RISK_REDUCERS.map((r) => (
              <RevealItem key={r.t}>
                <GlassCard tone="solid" className="h-full">
                  <div className="text-2xl text-petrol">{r.icon}</div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-charcoal">{r.t}</h3>
                  <p className="mt-1 text-[14px] leading-snug text-charcoal/70">{r.d}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* 9 · FAQ */}
      <Section tone="ivory-dim">
        <Container>
          <SectionHeader kicker="Preguntas frecuentes" title="Antes de reservar" />
          <div className="mt-10">
            <FAQAccordion items={FAQ} />
          </div>
        </Container>
      </Section>

      {/* 10 · CTA final */}
      <Section tone="charcoal" pad="lg">
        <Container width="narrow" className="text-center">
          <DisplayHeading size="lg">Reserva tu asiento en la cohorte en vivo</DisplayHeading>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ivory/70">
            Dos días para pasar de mirar listados a ejecutar con criterio. Cupo limitado por la capacidad real
            de la cohorte.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTAButton onClick={() => setCheckout(true)} icon={<Icon.ArrowRight />}>
              Reservar mi asiento ($297)
            </CTAButton>
            <CTAButton href={waLink('Hola, tengo una pregunta sobre el Intensivo MAP-9 antes de comprar.')} variant="whatsapp" icon={<Icon.Whatsapp />}>
              Preguntar por WhatsApp
            </CTAButton>
          </div>
        </Container>
      </Section>

      <CheckoutMock
        open={checkout}
        onClose={() => setCheckout(false)}
        continueTo="/l/04-gracias-intensivo"
        product={{
          name: 'Intensivo MAP-9',
          price: '$297',
          priceNote: 'viernes + sábado · en vivo · cohorte limitada',
          bullets: ['2 días en vivo', 'Guía PDF del MAP-9 + 5 herramientas', 'Caso real desglosado', 'Repetición + sesión de seguimiento'],
        }}
      />
    </LandingLayout>
  )
}
