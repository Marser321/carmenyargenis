import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { useIsCoarsePointer } from '../../lib/useIsCoarsePointer'

/**
 * Secuencia "pinned" de scrollytelling (receta P2): una sección se fija mientras
 * el scroll avanza paso a paso. SIN scroll-jacking (sólo position:sticky nativo).
 *
 * `children(active)` recibe el índice de paso activo (0..count-1) y dibuja el
 * estado. Guardarraíles: reduced-motion / touch → fallback estático no fijado
 * que muestra el último paso (todo revelado), sin spacer alto.
 *
 * La parte activa vive en `PinnedActive` para que `useScroll({ target })` SÓLO
 * se monte cuando el `ref` se adjunta de verdad — si se llamara también en la
 * ruta deshabilitada, Framer Motion avisaría "container has a non-static
 * position" porque el ref nunca llega al DOM.
 */
export function PinnedSequence({
  count,
  children,
  className,
  vhPerStep = 80,
}: {
  count: number
  children: (active: number) => ReactNode
  className?: string
  vhPerStep?: number
}) {
  const reduce = useReducedMotion()
  const coarse = useIsCoarsePointer()
  const disabled = Boolean(reduce) || coarse

  if (disabled) {
    // Estático: todo revelado, flujo normal (sin pin ni spacer, sin useScroll).
    return <div className={cn('relative', className)}>{children(count - 1)}</div>
  }

  return (
    <PinnedActive count={count} className={className} vhPerStep={vhPerStep}>
      {children}
    </PinnedActive>
  )
}

function PinnedActive({
  count,
  children,
  className,
  vhPerStep,
}: {
  count: number
  children: (active: number) => ReactNode
  className?: string
  vhPerStep: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const [active, setActive] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    // Reparte el progreso en `count` tramos; el último tramo se mantiene activo.
    const idx = Math.min(count - 1, Math.max(0, Math.floor(p * count)))
    setActive(idx)
  })

  return (
    <div ref={ref} className="relative" style={{ height: `${count * vhPerStep + 20}vh` }}>
      <div className={cn('sticky top-[84px] flex min-h-[calc(100vh-84px)] items-center', className)}>
        <div className="w-full">{children(active)}</div>
      </div>
    </div>
  )
}
