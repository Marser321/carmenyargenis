import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../lib/cn'
import { ease } from '../theme/tokens'

type Tone = 'petrol' | 'olive' | 'smoke' | 'ivory'

const tones: Record<Tone, string> = {
  petrol: 'text-petrol',
  olive: 'text-olive',
  smoke: 'text-smoke',
  ivory: 'text-ivory/70',
}

/** Antetítulo / eyebrow editorial con regla que se dibuja al entrar. */
export function Kicker({
  children,
  tone = 'petrol',
  className,
}: {
  children: ReactNode
  tone?: Tone
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.22em]',
        tones[tone],
        className,
      )}
    >
      <motion.span
        className="h-px w-9 bg-current opacity-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: ease.out, delay: 0.25 }}
        style={{ originX: 0 }}
      />
      {children}
    </div>
  )
}
