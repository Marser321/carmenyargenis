import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

/**
 * Tarjeta glass controlada. `tone='light'` sobre fondos marfil; `tone='dark'`
 * sobre secciones pizarra/petróleo. Glass con moderación (regla de marca).
 */
export function GlassCard({
  children,
  tone = 'light',
  className,
}: {
  children: ReactNode
  tone?: 'light' | 'dark' | 'solid'
  className?: string
}) {
  const toneClass =
    tone === 'dark'
      ? 'glass-dark text-ivory shadow-glass-dark'
      : tone === 'solid'
        ? 'bg-white border border-charcoal/10 text-charcoal shadow-glass'
        : 'glass-light text-charcoal shadow-glass'
  return <div className={cn('rounded-2xl p-6', toneClass, className)}>{children}</div>
}
