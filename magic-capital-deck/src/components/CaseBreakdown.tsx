import { motion } from 'framer-motion'
import { ease } from '../theme/tokens'
import { Disclaimer } from './Disclaimer'

type Row = { label: string; value: string }

/** Desglose del caso real (editorial oscuro) con disclaimer en línea, legible y pegado. */
export function CaseBreakdown({
  rows,
  totalLabel,
  totalValue,
  disclaimer,
}: {
  rows: readonly Row[]
  totalLabel: string
  totalValue: string
  disclaimer: string
}) {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl glass-dark">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
        >
          {rows.map((r) => (
            <motion.div
              key={r.label}
              variants={{
                hidden: { opacity: 0, x: -8 },
                show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: ease.out } },
              }}
              className="flex items-center justify-between border-b border-ivory/10 px-6 py-3.5"
            >
              <span className="text-[15px] text-ivory/80">{r.label}</span>
              <span className="font-mono text-[15px] text-ivory">{r.value}</span>
            </motion.div>
          ))}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.5, ease: ease.out } },
            }}
            className="flex items-center justify-between bg-petrol/30 px-6 py-4"
          >
            <span className="text-[15px] font-medium text-ivory">{totalLabel}</span>
            <span className="font-display text-lg font-semibold text-ivory">{totalValue}</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-4">
        <Disclaimer text={disclaimer} variant="inline" tone="dark" />
      </div>
    </div>
  )
}
