import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../lib/cn'

type Variant = 'primary' | 'whatsapp' | 'ghost'

const variants: Record<Variant, string> = {
  primary: 'bg-petrol text-ivory hover:bg-petrol-bright',
  whatsapp: 'bg-transparent text-olive border border-olive/60 hover:bg-olive/10',
  ghost: 'bg-transparent border border-current/30 hover:border-current/60',
}

/** CTA sandbox (no navega: href="#"). Azul petróleo principal + variante WhatsApp. */
export function CTAButton({
  children,
  variant = 'primary',
  className,
}: {
  children: ReactNode
  variant?: Variant
  className?: string
}) {
  return (
    <motion.a
      href="#"
      onClick={(e) => e.preventDefault()}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-7 py-4 text-lg font-medium transition-colors',
        variants[variant],
        className,
      )}
    >
      {children}
    </motion.a>
  )
}
