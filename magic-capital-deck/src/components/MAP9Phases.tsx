import { motion } from 'framer-motion'
import { ease } from '../theme/tokens'

/**
 * Las 9 fases del Método MAP-9 que se construyen 01→09 en cascada cuando `active`.
 * Pensado para narrarse en vivo (un → dispara la secuencia). Ilustra PROCESO, no resultado.
 */
export function MAP9Phases({
  phases,
  active = true,
}: {
  phases: readonly string[]
  active?: boolean
}) {
  return (
    <motion.div
      className="grid grid-cols-3 gap-2.5"
      initial="hidden"
      animate={active ? 'show' : 'hidden'}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
    >
      {phases.map((p, i) => {
        const isFilter = i >= 6 // las fases 7–9 (depuración + minimizar riesgo) = el corazón del método
        return (
          <motion.div
            key={p}
            variants={{
              hidden: { opacity: 0, y: 12, scale: 0.96 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: ease.out } },
            }}
            className={
              'rounded-xl border p-3 transition-colors ' +
              (isFilter
                ? 'border-gold/30 bg-gold/[0.08]'
                : 'border-white/10 bg-white/[0.04]')
            }
          >
            <div
              className={
                'font-display text-lg font-semibold tabular-nums ' +
                (isFilter ? 'text-gold' : 'text-ivory/40')
              }
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="mt-1 text-[12.5px] font-medium leading-tight text-ivory/80">{p}</div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
