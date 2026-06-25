import { motion, useReducedMotion } from 'framer-motion'
import { ease } from '../theme/tokens'
import { CountUp } from './CountUp'

type Item = { label: string; hint: string }

// Anchos relativos ilustrativos (no cifras prometidas) para las barras de cada componente.
const widths = ['38%', '22%', '64%', '30%', '46%']

/** Worksheet animado del capital total de entrada. Barras ilustrativas, sin montos prometidos. */
export function CapitalCalc({
  items,
  totalLabel,
  totalLow,
  totalHigh,
}: {
  items: readonly Item[]
  totalLabel: string
  totalLow: number
  totalHigh: number
}) {
  // `width` no es transform → MotionConfig reducedMotion no lo neutraliza. Lo gateamos aquí.
  const reduce = useReducedMotion()
  return (
    <div className="w-full rounded-2xl bg-navy-soft p-7 shadow-glass-dark ring-1 ring-white/10">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } } }}
        className="space-y-3.5"
      >
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            variants={{
              hidden: { opacity: 0, y: 8 },
              show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: ease.out } },
            }}
            className="flex items-center gap-4"
          >
            <div className="w-56 shrink-0">
              <div className="text-[15px] font-medium text-ivory">{it.label}</div>
              <div className="text-[12px] text-ivory/55">{it.hint}</div>
            </div>
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gold/70"
                initial={reduce ? false : { width: 0 }}
                animate={{ width: widths[i % widths.length] }}
                transition={reduce ? { duration: 0 } : { duration: 0.7, ease: ease.out, delay: 0.4 + i * 0.12 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: ease.out, delay: 0.4 + items.length * 0.12 }}
        className="mt-6 flex items-center justify-between rounded-xl bg-gold px-6 py-4 text-midnight"
      >
        <span className="text-[15px] font-medium opacity-90">{totalLabel}</span>
        <span className="font-display text-2xl font-semibold tracking-tight">
          <CountUp to={totalLow} prefix="$" delay={0.5} duration={1.1} />
          {' – '}
          <CountUp to={totalHigh} prefix="$" delay={0.7} duration={1.2} />
        </span>
      </motion.div>
    </div>
  )
}
