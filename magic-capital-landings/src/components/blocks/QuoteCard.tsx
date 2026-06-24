import type { ReactNode } from 'react'
import { Reveal } from '../motion/Reveal'
import { Footnote } from '../primitives/Footnote'
import { Quote } from '../primitives/icons'
import { cn } from '../../lib/cn'

/**
 * Cita editorial sobria. Sin claims de resultados; si referencia una cifra,
 * pásala con su disclaimer obligatorio vía `footnote`. tone-aware.
 */
export function QuoteCard({
  quote,
  attribution,
  role,
  footnote,
  tone = 'light',
  className,
}: {
  quote: ReactNode
  attribution?: string
  role?: string
  footnote?: string
  tone?: 'light' | 'dark' | 'solid'
  className?: string
}) {
  const dark = tone === 'dark'
  const container =
    tone === 'dark'
      ? 'border-white/10 bg-white/[0.04] text-ivory'
      : tone === 'solid'
        ? 'border-charcoal/10 bg-white text-charcoal shadow-glass'
        : 'border-charcoal/10 bg-white/70 text-charcoal'
  return (
    <Reveal className={className}>
      <figure className={cn('rounded-2xl border p-6', container)}>
        <span className="mb-3 inline-flex text-xl text-olive" aria-hidden>
          <Quote />
        </span>
        <blockquote className={cn('text-[17px] leading-relaxed', dark ? 'text-ivory/90' : 'text-charcoal/90')}>
          {quote}
        </blockquote>
        {(attribution || role) && (
          <figcaption className={cn('mt-4 text-[13px]', dark ? 'text-ivory/65' : 'text-smoke')}>
            {attribution && <span className="font-semibold">{attribution}</span>}
            {attribution && role && ' · '}
            {role}
          </figcaption>
        )}
        {footnote && (
          <div className="mt-3">
            <Footnote tone={dark ? 'dark' : 'light'}>{footnote}</Footnote>
          </div>
        )}
      </figure>
    </Reveal>
  )
}
