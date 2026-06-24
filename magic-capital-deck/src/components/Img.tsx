import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../lib/cn'

type Scrim = 'none' | 'left' | 'right' | 'bottom' | 'full'

const scrimClass: Record<Scrim, string> = {
  none: '',
  left: 'bg-gradient-to-r from-charcoal/90 via-charcoal/45 to-transparent',
  right: 'bg-gradient-to-l from-charcoal/90 via-charcoal/45 to-transparent',
  bottom: 'bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent',
  full: 'bg-charcoal/55',
}

/** Placeholder elegante cuando la imagen aún no existe (no rompe el deck). */
function Placeholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-charcoal-soft text-center grain">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #F7F5F0 0 1px, transparent 1px 14px)',
        }}
      />
      <div className="relative z-10 max-w-[80%]">
        <div className="mx-auto mb-3 h-8 w-8 rounded-full border border-olive/50" />
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-olive/80">
          Imagen pendiente
        </p>
        <p className="mt-1.5 text-[13px] leading-snug text-ivory/55">{label}</p>
      </div>
    </div>
  )
}

/** Imagen con Ken Burns sutil, scrim para legibilidad y placeholder de respaldo. */
export function Img({
  src,
  alt,
  className,
  focal = '50% 50%',
  scrim = 'none',
  kenBurns = true,
  label,
}: {
  src?: string
  alt: string
  className?: string
  focal?: string
  scrim?: Scrim
  kenBurns?: boolean
  label?: string
}) {
  const reduce = useReducedMotion()
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !src || failed
  const animate = kenBurns && !reduce

  return (
    <div className={cn('relative overflow-hidden bg-charcoal-soft', className)}>
      {showPlaceholder ? (
        <Placeholder label={label || alt} />
      ) : (
        <motion.img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
          style={{ objectPosition: focal }}
          initial={animate ? { scale: 1.05 } : false}
          animate={animate ? { scale: [1.05, 1.12] } : { scale: 1 }}
          transition={
            animate
              ? { duration: 20, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }
              : { duration: 0 }
          }
        />
      )}
      {scrim !== 'none' && <div className={cn('absolute inset-0', scrimClass[scrim])} />}
    </div>
  )
}
