import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

/** Pastilla pequeña (etiqueta de rol, precio o estado). Sobria, sin hype. */
export function Badge({
  children,
  tone = 'olive',
  className,
}: {
  children: ReactNode
  tone?: 'olive' | 'petrol' | 'smoke' | 'ivory'
  className?: string
}) {
  const toneClass = {
    olive: 'bg-olive/12 text-olive ring-olive/20',
    petrol: 'bg-petrol/10 text-petrol ring-petrol/20',
    smoke: 'bg-smoke/15 text-smoke ring-smoke/25',
    ivory: 'bg-white/10 text-ivory ring-white/20',
  }[tone]
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ring-1',
        toneClass,
        className,
      )}
    >
      {children}
    </span>
  )
}
