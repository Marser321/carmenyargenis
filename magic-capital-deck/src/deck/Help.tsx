import { motion } from 'framer-motion'
import { copy } from '../content/copy'
import { Close } from '../components/icons'

/** Hoja de atajos / cómo navegar. Se abre con el botón “?” o la tecla ?. */
export function Help({ onClose }: { onClose: () => void }) {
  const c = copy.ui.help
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 grid place-items-center bg-[#0b0c0d]/80 px-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 16, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 8, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl bg-navy-soft p-8 text-ivory shadow-glass-dark ring-1 ring-white/10"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold tracking-tight">{c.title}</h2>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="grid h-9 w-9 place-items-center rounded-full text-lg text-ivory/60 transition-colors hover:bg-white/10"
          >
            <Close />
          </button>
        </div>
        <dl className="mt-5 divide-y divide-white/10">
          {c.rows.map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-6 py-3">
              <dt className="text-[14px] font-semibold text-ivory">{k}</dt>
              <dd className="text-right text-[14px] text-ivory/65">{v}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </motion.div>
  )
}
