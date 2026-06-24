import { Link } from 'react-router-dom'
import { Container } from '../primitives/Container'
import { Disclaimer } from '../primitives/Disclaimer'
import { LANDINGS } from '../../content/registry'
import { BRAND, FOUNDERS, CONTACT } from '../../content/brand'
import { DEMO_NOTE } from '../../content/compliance'

/** Pie de página común: marca, navegación del funnel, "no somos asesores" y el disclaimer íntegro. */
export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="font-display text-xl font-semibold">{BRAND.name}</div>
            <p className="mt-2 max-w-xs text-[13.5px] leading-snug text-ivory/60">{BRAND.tagline}</p>
            <p className="mt-3 text-[13px] text-ivory/55">
              {FOUNDERS.argenis.name} &amp; {FOUNDERS.carmen.name}
            </p>
          </div>

          <nav aria-label="Funnel">
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-olive">Recorrido</div>
            <ul className="mt-3 space-y-1.5 text-[13.5px] text-ivory/70">
              {LANDINGS.map((l) => (
                <li key={l.slug}>
                  <Link to={l.route} className="inline-block py-0.5 hover:text-ivory">
                    {l.title}
                    {l.price ? <span className="text-ivory/40"> · {l.price}</span> : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-olive">Más</div>
            <ul className="mt-3 space-y-1.5 text-[13.5px] text-ivory/70">
              <li>
                <Link to="/" className="inline-block py-0.5 hover:text-ivory">
                  Hub / selector
                </Link>
              </li>
              <li>
                <Link to="/lead-magnets" className="inline-block py-0.5 hover:text-ivory">
                  Lead magnets
                </Link>
              </li>
              <li>
                <a href={CONTACT.deckUrl} target="_blank" rel="noopener noreferrer" className="inline-block py-0.5 hover:text-ivory">
                  Deck de la masterclass ↗
                </a>
              </li>
            </ul>
            <p className="mt-4 text-[12px] leading-snug text-ivory/45">
              No somos asesores de inversión registrados, abogados ni asesores fiscales.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Disclaimer tone="dark" />
        </div>
        <p className="mt-4 text-center text-[11.5px] text-ivory/40">{DEMO_NOTE}</p>
      </Container>
    </footer>
  )
}
