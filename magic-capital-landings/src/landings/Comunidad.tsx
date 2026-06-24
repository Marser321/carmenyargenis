import { useState } from 'react'
import {
  Section,
  Container,
  Kicker,
  DisplayHeading,
  SectionHeader,
  GlassCard,
  CTAButton,
  Icon,
} from '../components/primitives'
import { Reveal, Stagger, RevealItem } from '../components/motion'
import { FunnelMap, YesNoColumns, FAQAccordion } from '../components/blocks'
import type { QA } from '../components/blocks'
import { Hero, LandingLayout } from '../components/shell'
import { CheckoutMock } from '../components/forms'
import { FUNNEL, waLink } from '../content/brand'

const INCLUYE = [
  {
    icon: <Icon.Landmark />,
    t: 'Contenido nuevo de las dos líneas, cada mes',
    d: 'Sesiones y material sobre subastas tax deed con Argenis (Método MAP-9) y sobre crédito empresarial / financiamiento al 0% con Carmen. Nada de teoría suelta: el proceso, paso a paso.',
  },
  {
    icon: <Icon.Whatsapp />,
    t: 'Un espacio para preguntar y resolver dudas',
    d: 'No te quedas solo entre masterclasses. Traes tus preguntas, las pones sobre la mesa y avanzas con la comunidad que recorre el mismo camino.',
  },
  {
    icon: <Icon.Filter />,
    t: 'Recursos educativos, organizados en un lugar',
    d: 'Guías y grabaciones reunidas y ordenadas, para que encuentres lo que buscas sin perderte entre archivos sueltos.',
  },
  {
    icon: <Icon.MapPin />,
    t: 'Recordatorios del calendario y novedades',
    d: 'Avisos del calendario de subastas y de las próximas sesiones, para que mantengas el ritmo sin estar pendiente de todo.',
  },
  {
    icon: <Icon.Shield />,
    t: 'Un entorno sobrio y honesto',
    d: 'Educación y criterio, sin hype ni promesas de dinero. Aprendes a pensar el proceso, no a perseguir un resultado prometido.',
  },
]

const OFERTA = [
  'Cancela cuando quieras, sin penalización.',
  'Sin compromiso ni letra chica.',
  'Pago recurrente seguro.',
]

const FAQ: QA[] = [
  {
    q: '¿Qué es exactamente la comunidad?',
    a: 'Es una membresía mensual de acompañamiento educativo: contenido y sesiones nuevas de las dos líneas (subastas tax deed con Argenis y crédito empresarial / financiamiento al 0% con Carmen), un espacio para preguntar y resolver dudas, recursos organizados y recordatorios del calendario. Es el puente entre la masterclass gratis y el Intensivo.',
  },
  {
    q: '¿Garantiza resultados?',
    a: 'No. La comunidad es educación y acompañamiento: no prometemos ingresos, ganancias ni aprobación de crédito. Cualquier acceso a crédito, límite, tasa o aprobación depende del emisor y de tu perfil, y los resultados en subasta varían por estado, condado y propiedad.',
  },
  {
    q: '¿Puedo cancelar?',
    a: 'Sí, cuando quieras, sin penalización y sin letra chica. Es una membresía mensual: si en algún momento ya no te suma, la cancelas y listo.',
  },
  {
    q: '¿Esto reemplaza el Intensivo o la mentoría?',
    a: 'No. La comunidad es el paso previo: te mantiene cerca y con criterio mientras decides —si decides— dar el siguiente paso al Intensivo MAP-9 o a la mentoría 1:1. No sustituye esa formación más profunda.',
  },
  {
    q: '¿Necesito inglés?',
    a: 'No. Todo el contenido, las sesiones y las respuestas son en español neutro.',
  },
]

export default function Comunidad() {
  const [checkout, setCheckout] = useState(false)

  return (
    <LandingLayout waMessage="Hola, tengo dudas sobre la Comunidad Magic Capital ($27/mes) antes de suscribirme.">
      {/* 1 · Hero */}
      <Hero
        tone="ivory"
        image={{
          src: '/img/09/09-comunidad__hero-pertenencia-sobria.png',
          alt: 'Comunidad Magic Capital: gente avanzando en el mismo camino',
          focal: '50% 35%',
          scrim: 'left',
        }}
      >
        <div className="max-w-2xl">
          <Kicker>Comunidad Magic Capital · membresía mensual · en español</Kicker>
          <DisplayHeading as="h1" size="xl" className="mt-4">
            Sigue avanzando, con criterio y en comunidad
          </DisplayHeading>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-charcoal/75">
            Por $27/mes te mantienes cerca de las dos piezas que casi nadie enseña juntas: la
            oportunidad (Método MAP-9 de Argenis) y el capital (crédito empresarial 0% de Carmen).
            Contenido nuevo, preguntas respondidas, gente recorriendo el mismo camino.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <CTAButton onClick={() => setCheckout(true)} icon={<Icon.ArrowRight />}>
              {FUNNEL.comunidad.cta}
            </CTAButton>
            <CTAButton
              href={waLink('Hola, tengo dudas sobre la Comunidad Magic Capital ($27/mes).')}
              variant="whatsapp"
              icon={<Icon.Whatsapp />}
            >
              Escríbenos por WhatsApp
            </CTAButton>
          </div>
          <p className="mt-4 text-[13px] text-charcoal/55">
            $27/mes · cancela cuando quieras · sin compromiso.
          </p>
        </div>
      </Hero>

      {/* 2 · Qué incluye */}
      <Section tone="ivory" pad="lg">
        <Container>
          <SectionHeader
            kicker="Qué incluye"
            title="Acompañamiento mensual, sin promesas"
            intro="Cinco cosas concretas que recibes cada mes. Todo es proceso y educación: te ayudamos a mantener el ritmo y el criterio, no a perseguir un resultado prometido."
          />
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {INCLUYE.map((c) => (
              <RevealItem key={c.t}>
                <GlassCard tone="solid" className="h-full">
                  <div className="text-2xl text-petrol">{c.icon}</div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-charcoal">{c.t}</h3>
                  <p className="mt-2 text-[14.5px] leading-snug text-charcoal/70">{c.d}</p>
                </GlassCard>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* 3 · Para quién SÍ / NO */}
      <Section tone="ivory-dim">
        <Container>
          <SectionHeader kicker="¿Es para ti?" title="Para quién sí · para quién no" />
          <div className="mt-10">
            <YesNoColumns
              left={{
                heading: 'Es para ti si…',
                variant: 'positive',
                items: [
                  'Viste la masterclass y quieres seguir aprendiendo sin gastar mucho.',
                  'Prefieres avanzar paso a paso antes del Intensivo.',
                  'Quieres preguntar y no perder el impulso.',
                ],
              }}
              right={{
                heading: 'No es para ti si…',
                variant: 'negative',
                items: [
                  'Esperas que la comunidad garantice ganancias o un resultado.',
                  'Buscas asesoría legal, fiscal o de inversión personal (esto no lo es).',
                  'Quieres que alguien opere por ti.',
                ],
              }}
            />
          </div>
        </Container>
      </Section>

      {/* 4 · Dónde encaja */}
      <Section tone="charcoal" pad="md">
        <Container width="narrow">
          <SectionHeader
            tone="dark"
            kicker="Dónde encaja"
            title="El puente entre lo gratis y el siguiente paso"
          />
          <div className="mt-10">
            <FunnelMap current="comunidad" tone="dark" />
          </div>
          <Reveal>
            <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-ivory/70">
              Masterclass gratis → Comunidad $27/mes → Intensivo MAP-9 $297 → Mentoría 1:1 $3,997.
              La comunidad es el puente: te mantiene cerca y con criterio hasta que decidas —si
              decides— dar el siguiente paso. Sin presión.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 5 · Precio y checkout */}
      <Section tone="ivory" pad="lg">
        <Container width="narrow">
          <Reveal>
            <GlassCard tone="solid" className="mx-auto max-w-xl text-center">
              <Kicker className="mb-3">Una membresía honesta</Kicker>
              <div className="font-display text-5xl font-semibold tabular-nums text-charcoal">
                $27<span className="text-2xl text-smoke">/mes</span>
              </div>
              <Stagger className="mx-auto mt-6 max-w-sm space-y-2.5 text-left">
                {OFERTA.map((b) => (
                  <RevealItem key={b} subtle>
                    <div className="flex gap-3">
                      <Icon.Check className="mt-1 shrink-0 text-olive" />
                      <p className="text-[15px] leading-snug text-charcoal/80">{b}</p>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>
              <div className="mt-7">
                <CTAButton
                  onClick={() => setCheckout(true)}
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<Icon.ArrowRight />}
                >
                  {FUNNEL.comunidad.cta}
                </CTAButton>
              </div>
              <p className="mt-4 text-[13px] text-charcoal/60">
                ¿Dudas antes de suscribirte? Escríbenos por WhatsApp.
              </p>
            </GlassCard>
          </Reveal>
        </Container>
      </Section>

      {/* 6 · FAQ */}
      <Section tone="ivory-dim">
        <Container>
          <SectionHeader kicker="Preguntas frecuentes" title="Lo que conviene saber antes" />
          <div className="mt-10">
            <FAQAccordion items={FAQ} />
          </div>
        </Container>
      </Section>

      {/* 7 · CTA final */}
      <Section tone="charcoal" pad="lg">
        <Container width="narrow" className="text-center">
          <DisplayHeading size="lg">Quédate cerca. Sigue avanzando.</DisplayHeading>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ivory/70">
            Una membresía honesta que te mantiene cerca de la oportunidad y del capital, con criterio
            y en español. Sin hype, sin presión: avanzas a tu ritmo y cancelas cuando quieras.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTAButton onClick={() => setCheckout(true)} icon={<Icon.ArrowRight />}>
              {FUNNEL.comunidad.cta}
            </CTAButton>
            <CTAButton
              href={waLink('Hola, quiero unirme a la Comunidad Magic Capital ($27/mes).')}
              variant="whatsapp"
              icon={<Icon.Whatsapp />}
            >
              Escríbenos por WhatsApp
            </CTAButton>
          </div>
          <p className="mt-4 text-[13px] text-ivory/50">$27/mes · cancela cuando quieras.</p>
        </Container>
      </Section>

      {/* Checkout simulado */}
      <CheckoutMock
        open={checkout}
        onClose={() => setCheckout(false)}
        product={{
          name: 'Comunidad Magic Capital',
          price: '$27',
          priceNote: 'al mes · cancela cuando quieras',
          bullets: [
            'Sesiones y contenido nuevo cada mes',
            'Espacio para preguntar y resolver dudas',
            'Acceso organizado a recursos educativos',
            'Recordatorios del calendario de subastas',
          ],
        }}
      />
    </LandingLayout>
  )
}
