import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../lib/cn'
import { ease } from '../theme/tokens'

/** Tarjeta glass controlada. `interactive` añade lift + borde más claro al hover. */
export function GlassCard({
  children,
  variant = 'light',
  interactive = false,
  className,
}: {
  children: ReactNode
  variant?: 'light' | 'dark'
  interactive?: boolean
  className?: string
}) {
  const base = cn(
    'rounded-2xl p-6',
    variant === 'dark' ? 'glass-dark shadow-glass-dark' : 'glass-light shadow-glass',
    className,
  )

  if (!interactive) return <div className={base}>{children}</div>

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: ease.out }}
      className={cn(
        base,
        'transition-colors',
        variant === 'dark' ? 'hover:border-ivory/30' : 'hover:border-charcoal/25',
      )}
    >
      {children}
    </motion.div>
  )
}
