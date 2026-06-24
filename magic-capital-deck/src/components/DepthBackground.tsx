import type { ReactNode } from 'react'
import { useEffect } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion'
import { cn } from '../lib/cn'
import { parallax } from '../theme/tokens'

export type DepthLayer = {
  node: ReactNode
  /** 0 = fondo lejano (se mueve poco) · 1 = capa al frente (se mueve más). */
  depth?: number
  className?: string
}

/**
 * Fondo de profundidad: varias capas que reaccionan al puntero a distinta
 * velocidad (parallax) sobre el escenario. Da volumen sin cambiar el modelo de
 * slides. Se pasa como `background` de <Slide/>. Reduced-motion → capas estáticas.
 */
export function DepthBackground({ layers, className }: { layers: DepthLayer[]; className?: string }) {
  const reduce = useReducedMotion()
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, parallax.spring)
  const sy = useSpring(py, parallax.spring)

  useEffect(() => {
    if (reduce) return
    const onMove = (e: PointerEvent) => {
      px.set(e.clientX / window.innerWidth - 0.5)
      py.set(e.clientY / window.innerHeight - 0.5)
    }
    const onLeave = () => {
      px.set(0)
      py.set(0)
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [reduce, px, py])

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)} aria-hidden>
      {layers.map((l, i) => (
        <ParallaxLayer key={i} sx={sx} sy={sy} depth={l.depth ?? 0} reduce={reduce} className={l.className}>
          {l.node}
        </ParallaxLayer>
      ))}
    </div>
  )
}

function ParallaxLayer({
  sx,
  sy,
  depth,
  reduce,
  className,
  children,
}: {
  sx: MotionValue<number>
  sy: MotionValue<number>
  depth: number
  reduce: boolean | null
  className?: string
  children: ReactNode
}) {
  const amp = parallax.amplitude
  const x = useTransform(sx, (v) => v * depth * amp)
  const y = useTransform(sy, (v) => v * depth * amp)

  if (reduce) {
    return <div className={cn('absolute inset-0', className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn('absolute inset-0', className)}
      style={{ x, y, scale: parallax.layerScale + depth * 0.04 }}
    >
      {children}
    </motion.div>
  )
}
