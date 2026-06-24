import { motion } from 'framer-motion'
import { ease } from '../theme/tokens'

type Pole = { eyebrow: string; title: string; sub: string }

/**
 * El mecanismo dual en movimiento: la oportunidad (Argenis) y el capital (Carmen)
 * entran desde lados opuestos y convergen en un sistema. Es la diferenciación de la
 * marca hecha animación. Self-animado al montar (o por `active`).
 */
export function DualMechanism({
  left,
  right,
  center,
  active = true,
}: {
  left: Pole
  right: Pole
  center: string
  active?: boolean
}) {
  const card = 'rounded-2xl glass-dark p-5'
  const state = active ? 'show' : 'hidden'

  return (
    <div className="relative flex flex-col items-stretch gap-3">
      {/* Pilar A — la oportunidad (entra desde la izquierda) */}
      <motion.div
        className={card}
        initial="hidden"
        animate={state}
        variants={{
          hidden: { opacity: 0, x: -32 },
          show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: ease.out, delay: 0.05 } },
        }}
      >
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-olive/80">{left.eyebrow}</div>
        <div className="mt-1 font-display text-xl font-semibold text-ivory">{left.title}</div>
        <p className="mt-1 text-[13.5px] leading-snug text-ivory/65">{left.sub}</p>
      </motion.div>

      {/* Conector que se dibuja + signo de unión */}
      <div className="relative flex h-7 items-center justify-center">
        <motion.span
          aria-hidden
          className="absolute h-7 w-px bg-olive/50"
          initial={{ scaleY: 0 }}
          animate={active ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.4, ease: ease.out, delay: 0.55 }}
          style={{ originY: 0 }}
        />
        <motion.span
          className="relative grid h-7 w-7 place-items-center rounded-full bg-olive/15 font-display text-base text-olive ring-1 ring-olive/30"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.35, ease: ease.out, delay: 0.75 }}
        >
          +
        </motion.span>
      </div>

      {/* Pilar B — el capital (entra desde la derecha) */}
      <motion.div
        className={card}
        initial="hidden"
        animate={state}
        variants={{
          hidden: { opacity: 0, x: 32 },
          show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: ease.out, delay: 0.3 } },
        }}
      >
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-olive/80">{right.eyebrow}</div>
        <div className="mt-1 font-display text-xl font-semibold text-ivory">{right.title}</div>
        <p className="mt-1 text-[13.5px] leading-snug text-ivory/65">{right.sub}</p>
      </motion.div>

      {/* Convergencia → un sistema */}
      <motion.div
        className="mt-1 rounded-2xl bg-petrol/30 px-5 py-3.5 text-center ring-1 ring-petrol/40"
        initial={{ opacity: 0, y: 12 }}
        animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.5, ease: ease.out, delay: 1 }}
      >
        <span className="font-display text-lg font-semibold text-ivory">{center}</span>
      </motion.div>
    </div>
  )
}
