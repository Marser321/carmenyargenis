import { motion } from 'framer-motion'
import { copy } from '../content/copy'

/** Overlay de primer uso (se muestra una sola vez vía localStorage). */
export function Onboarding({ onDismiss }: { onDismiss: () => void }) {
  const c = copy.ui.onboarding
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 grid place-items-center bg-[#0b0c0d]/80 px-6 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: 18, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md rounded-2xl bg-ivory p-8 text-charcoal shadow-2xl"
      >
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-petrol">Magic Capital</p>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">{c.title}</h2>
        <ul className="mt-5 space-y-3">
          {c.lines.map((l, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-snug text-charcoal/80">
              <span className="mt-0.5 text-petrol">→</span>
              {l}
            </li>
          ))}
        </ul>
        <button
          onClick={onDismiss}
          className="mt-7 w-full rounded-xl bg-petrol px-6 py-3.5 font-medium text-ivory transition-colors hover:bg-petrol-bright"
        >
          {c.cta}
        </button>
      </motion.div>
    </motion.div>
  )
}
