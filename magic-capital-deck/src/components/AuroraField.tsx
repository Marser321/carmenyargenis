import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../lib/cn'

type Tone = 'petrol' | 'olive' | 'mixed'

// Manchas de luz en color de marca (petróleo / oliva), MUY tenues y difusas.
const palettes: Record<Tone, string[]> = {
  petrol: ['rgba(22,86,107,0.38)', 'rgba(14,58,74,0.36)'],
  olive: ['rgba(92,107,74,0.34)', 'rgba(14,58,74,0.32)'],
  mixed: ['rgba(22,86,107,0.36)', 'rgba(92,107,74,0.30)', 'rgba(14,58,74,0.34)'],
}

const spots = [
  { top: '-14%', left: '-8%', size: '56%' },
  { top: '24%', left: '60%', size: '50%' },
  { top: '62%', left: '14%', size: '44%' },
]

const drift = [
  { x: [0, 36, -22, 0], y: [0, -26, 18, 0] },
  { x: [0, -44, 18, 0], y: [0, 28, -18, 0] },
  { x: [0, 26, -36, 0], y: [0, -16, 26, 0] },
]

/**
 * Campo atmosférico para slides oscuras: 2–3 manchas de luz que derivan MUY
 * lento detrás del contenido, dando profundidad cinematográfica sobria (no
 * sugiere "ganancia"). Solo transform (barato en GPU). reduced-motion → estático.
 */
export function AuroraField({ className, tone = 'mixed' }: { className?: string; tone?: Tone }) {
  const reduce = useReducedMotion()
  const colors = palettes[tone]
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden>
      {colors.map((c, i) => {
        const s = spots[i % spots.length]
        return (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl will-change-transform"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              aspectRatio: '1 / 1',
              background: `radial-gradient(circle at center, ${c} 0%, transparent 66%)`,
            }}
            animate={reduce ? undefined : drift[i % drift.length]}
            transition={
              reduce
                ? undefined
                : { duration: 28 + i * 6, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }
            }
          />
        )
      })}
    </div>
  )
}
