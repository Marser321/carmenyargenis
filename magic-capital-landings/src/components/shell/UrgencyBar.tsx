import { Link } from 'react-router-dom'
import { CountdownTimer } from '../blocks'
import { MASTERCLASS } from '../../content/brand'
import { ArrowRight } from '../primitives/icons'

/**
 * Barra slim de urgencia, FIJA sobre el header en todas las landings: recuerda
 * la próxima masterclass GRATIS con un contador a fecha real + un CTA directo a
 * la reserva. Honesta: apunta a `MASTERCLASS.fechaISO`; al pasar muestra un
 * estado grácil sin reinicio (carve-out de compliance). El conteo lo delega al
 * `CountdownTimer` (variante `inline`) para no duplicar la lógica de tiempo.
 */
export function UrgencyBar() {
  return (
    <div
      role="region"
      aria-label="Próxima masterclass gratis"
      className="fixed inset-x-0 top-0 z-50 border-b border-gold/25 bg-midnight/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-9 max-w-stage items-center justify-center gap-2.5 px-4 sm:h-10 sm:gap-4 sm:px-6">
        <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-gold sm:inline">
          Masterclass gratis · {MASTERCLASS.fechaLabel}
        </span>
        <span aria-hidden className="hidden text-gold/25 sm:inline">
          |
        </span>
        <CountdownTimer targetISO={MASTERCLASS.fechaISO} variant="inline" expiredLabel="Próxima sesión: pronto" />
        <Link
          to="/l/01-reserva"
          className="inline-flex shrink-0 items-center gap-1 rounded-full bg-gradient-to-b from-gold-bright to-gold-deep px-3 py-1 text-[12px] font-semibold text-midnight transition hover:brightness-110"
        >
          Reservar gratis
          <ArrowRight className="text-[11px]" />
        </Link>
      </div>
    </div>
  )
}
