import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type Size = 'sm' | 'md' | 'lg' | 'xl'

const sizes: Record<Size, string> = {
  sm: 'text-4xl',
  md: 'text-5xl',
  lg: 'text-6xl',
  xl: 'text-[5.25rem]',
}

/** Titular display editorial (Fraunces serif): tracking suave, leading ajustado. */
export function DisplayHeading({
  children,
  size = 'lg',
  className,
}: {
  children: ReactNode
  size?: Size
  className?: string
}) {
  return (
    <h1
      className={cn(
        'font-display font-semibold leading-[1.06] tracking-[-0.015em]',
        sizes[size],
        className,
      )}
    >
      {children}
    </h1>
  )
}
