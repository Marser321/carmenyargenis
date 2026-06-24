import { motion } from 'framer-motion'
import { slides } from './slides'
import { cn } from '../lib/cn'

type Props = {
  current: number
  onPick: (i: number) => void
  onClose: () => void
}

export function Overview({ current, onPick, onClose }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="deck-scroll fixed inset-0 z-40 overflow-y-auto bg-[#0b0c0d]/97 px-10 py-10 backdrop-blur"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-semibold text-ivory">Índice del deck</h2>
          <button
            onClick={onClose}
            className="rounded-lg border border-ivory/20 px-4 py-2 text-sm text-ivory/70 transition-colors hover:bg-ivory/10"
          >
            Cerrar (Esc)
          </button>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => onPick(i)}
              className={cn(
                'group flex flex-col rounded-xl border p-4 text-left transition-all',
                i === current
                  ? 'border-olive bg-olive/10'
                  : 'border-ivory/12 bg-ivory/[0.03] hover:border-ivory/30 hover:bg-ivory/[0.06]',
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold tabular-nums text-ivory/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-olive/70">{s.act}</span>
              </div>
              <span className="mt-3 text-[15px] leading-snug text-ivory/90">{s.title}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
