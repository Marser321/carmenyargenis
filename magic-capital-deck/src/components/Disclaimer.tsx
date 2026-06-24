import { cn } from '../lib/cn'

/** Disclaimer reutilizable. `inline` para notas junto a un caso; `full` para el pie legal §8. */
export function Disclaimer({
  text,
  variant = 'inline',
  tone = 'light',
  className,
}: {
  text: string
  variant?: 'inline' | 'full'
  tone?: 'light' | 'dark'
  className?: string
}) {
  const dim = tone === 'dark' ? 'text-ivory/60' : 'text-charcoal/55'
  if (variant === 'full') {
    return (
      <p className={cn('text-[12.5px] leading-relaxed', dim, className)}>{text}</p>
    )
  }
  return (
    <p
      className={cn(
        'border-l-2 pl-3 text-xs leading-snug',
        tone === 'dark' ? 'border-ivory/20' : 'border-charcoal/15',
        dim,
        className,
      )}
    >
      {text}
    </p>
  )
}
