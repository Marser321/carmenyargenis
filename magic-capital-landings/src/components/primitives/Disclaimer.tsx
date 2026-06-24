import { DISCLAIMER_FULL } from '../../content/compliance'
import { cn } from '../../lib/cn'

/**
 * Bloque de descargo de responsabilidad — texto íntegro de 00-SISTEMA §8.
 * Visible y legible (regla de compliance: nunca enterrado). Va al pie de
 * TODAS las páginas.
 */
export function Disclaimer({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <div
      className={cn(
        'rounded-xl border p-4 text-[12px] leading-relaxed',
        tone === 'dark'
          ? 'border-white/10 bg-white/[0.03] text-ivory/60'
          : 'border-charcoal/10 bg-charcoal/[0.02] text-smoke',
      )}
    >
      <p className="mb-1 font-semibold uppercase tracking-[0.14em] text-[10px] text-olive">
        Descargo de responsabilidad
      </p>
      {DISCLAIMER_FULL.replace('Descargo de responsabilidad: ', '')}
    </div>
  )
}
