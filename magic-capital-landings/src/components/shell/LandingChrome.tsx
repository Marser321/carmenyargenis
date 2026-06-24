import { useLocation, useNavigate, Link } from 'react-router-dom'
import { LANDINGS } from '../../content/registry'
import { BRAND } from '../../content/brand'
import { ArrowRight } from '../primitives/icons'
import { cn } from '../../lib/cn'

/**
 * Barra superior fija de las landings: volver al hub + selector rápido para
 * saltar a cualquier otra landing (alimentado por el registro).
 */
export function LandingChrome() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const current = LANDINGS.find((l) => l.route === pathname)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-charcoal/10 bg-ivory/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-stage items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-[13px] font-semibold text-charcoal/80 hover:text-charcoal"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-petrol text-[13px] font-bold text-ivory">
            M
          </span>
          <span className="hidden sm:inline">{BRAND.name}</span>
          <span className="text-smoke">·</span>
          <span className="text-smoke group-hover:text-charcoal">Hub</span>
        </Link>

        <div className="flex items-center gap-2">
          <label className="sr-only" htmlFor="landing-select">
            Ir a otra landing
          </label>
          <div className="relative">
            <select
              id="landing-select"
              value={current?.route ?? ''}
              onChange={(e) => navigate(e.target.value)}
              className={cn(
                'appearance-none rounded-full border border-charcoal/15 bg-white py-1.5 pl-3.5 pr-8 text-[13px] font-medium text-charcoal shadow-sm outline-none transition-colors hover:border-charcoal/30 focus:border-petrol',
              )}
            >
              {!current && <option value="">Elegir landing…</option>}
              {LANDINGS.map((l) => (
                <option key={l.slug} value={l.route}>
                  {l.num} · {l.title} {l.price ? `(${l.price})` : ''}
                </option>
              ))}
            </select>
            <ArrowRight className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-xs text-smoke" />
          </div>
        </div>
      </div>
    </header>
  )
}
