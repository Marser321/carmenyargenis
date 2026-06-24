import type { ReactNode } from 'react'
import { Reveal } from '../motion/Reveal'
import { cn } from '../../lib/cn'

export type FlowStep = { id?: string; label: string; sub?: string; icon?: ReactNode; active?: boolean }

/**
 * Diagrama de flujo sobrio (pasos, antes→después, posición en un proceso).
 * Generaliza el patrón conector de FunnelMap. tone-aware, reduced-motion safe.
 */
export function FlowDiagram({
  steps,
  orientation = 'horizontal',
  connector = 'arrow',
  tone = 'light',
  className,
}: {
  steps: FlowStep[]
  orientation?: 'horizontal' | 'vertical'
  connector?: 'arrow' | 'plus' | 'line'
  tone?: 'light' | 'dark'
  className?: string
}) {
  const dark = tone === 'dark'
  const horizontal = orientation === 'horizontal'
  return (
    <Reveal className={className}>
      <ol className={cn('flex gap-2', horizontal ? 'flex-col sm:flex-row sm:items-stretch' : 'flex-col')}>
        {steps.map((s, i) => (
          <li
            key={s.id ?? i}
            className={cn('flex items-center gap-2', horizontal ? 'flex-1 sm:flex-col' : 'flex-row')}
          >
            <div
              className={cn(
                'w-full rounded-xl border px-4 py-3 text-center',
                s.active
                  ? 'border-olive/50 bg-olive/12'
                  : dark
                    ? 'border-white/10 bg-white/[0.04]'
                    : 'border-charcoal/10 bg-white/70',
              )}
            >
              {s.icon && (
                <span className={cn('mb-1 inline-flex text-base', dark ? 'text-olive' : 'text-petrol')} aria-hidden>
                  {s.icon}
                </span>
              )}
              <div
                className={cn(
                  'text-[13px] font-semibold',
                  s.active ? (dark ? 'text-ivory' : 'text-petrol') : dark ? 'text-ivory/80' : 'text-charcoal/80',
                )}
              >
                {s.label}
              </div>
              {s.sub && (
                <div className={cn('mt-0.5 text-[12px]', dark ? 'text-ivory/65' : 'text-smoke')}>{s.sub}</div>
              )}
            </div>
            {i < steps.length - 1 && (
              <span
                className={cn('shrink-0 px-1 text-sm sm:py-1', dark ? 'text-ivory/35' : 'text-smoke/60')}
                aria-hidden
              >
                {connector === 'plus' ? (
                  '+'
                ) : connector === 'line' ? (
                  '·'
                ) : horizontal ? (
                  <>
                    <span className="hidden sm:inline">→</span>
                    <span className="sm:hidden">↓</span>
                  </>
                ) : (
                  '↓'
                )}
              </span>
            )}
          </li>
        ))}
      </ol>
    </Reveal>
  )
}
