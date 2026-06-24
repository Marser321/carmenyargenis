import { Reveal, Stagger, RevealItem } from '../motion/Reveal'
import { Check, X } from '../primitives/icons'
import { cn } from '../../lib/cn'

export type CompareCol = {
  heading: string
  items: string[]
  variant: 'positive' | 'negative'
}

function Col({ col, dark }: { col: CompareCol; dark: boolean }) {
  const positive = col.variant === 'positive'
  return (
    <div
      className={cn(
        'rounded-2xl border p-6',
        positive
          ? dark
            ? 'border-olive/35 bg-olive/[0.08]'
            : 'border-petrol/20 bg-petrol/[0.04]'
          : dark
            ? 'border-white/10 bg-white/[0.03]'
            : 'border-charcoal/10 bg-charcoal/[0.02]',
      )}
    >
      <h4
        className={cn(
          'font-display text-lg font-semibold',
          positive ? (dark ? 'text-ivory' : 'text-petrol') : dark ? 'text-ivory/80' : 'text-charcoal/75',
        )}
      >
        {col.heading}
      </h4>
      <Stagger className="mt-4 space-y-2.5" gap={0.06}>
        {col.items.map((it) => (
          <RevealItem key={it} subtle>
            <div className="flex gap-2.5">
              <span
                className={cn(
                  'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[12px]',
                  positive ? 'bg-olive/20 text-olive' : 'bg-smoke/20 text-smoke',
                )}
              >
                {positive ? <Check /> : <X />}
              </span>
              <span className={cn('text-[14px] leading-snug', dark ? 'text-ivory/80' : 'text-charcoal/80')}>{it}</span>
            </div>
          </RevealItem>
        ))}
      </Stagger>
    </div>
  )
}

/**
 * Dos columnas contrastadas (honestidad de marca): "para ti / no para ti",
 * "esto SÍ / esto NO", "qué haremos / qué no". `positive` lleva check olivo;
 * `negative` lleva equis gris (sobrio, nunca alarmista).
 */
export function CompareColumns({
  left,
  right,
  note,
  tone = 'light',
}: {
  left: CompareCol
  right: CompareCol
  note?: string
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2">
        <Col col={left} dark={dark} />
        <Col col={right} dark={dark} />
      </div>
      {note && (
        <Reveal>
          <p
            className={cn(
              'mx-auto mt-5 max-w-2xl rounded-xl px-4 py-3 text-center text-[14px] leading-snug',
              dark ? 'bg-white/[0.04] text-ivory/75' : 'bg-charcoal/[0.03] text-charcoal/75',
            )}
          >
            {note}
          </p>
        </Reveal>
      )}
    </div>
  )
}

// Alias semánticos (misma estructura, distinto uso narrativo).
export const YesNoColumns = CompareColumns
export const ForWhomColumns = CompareColumns
