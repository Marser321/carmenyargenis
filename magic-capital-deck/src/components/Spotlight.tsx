import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useMotionTemplate, useReducedMotion } from 'framer-motion'

/**
 * Luz radial tenue que sigue el cursor. Pensada para slides oscuras.
 * Capa pointer-events-none dentro del lienzo; mapea coords de viewport a
 * coordenadas locales del escenario (que está escalado).
 */
export function Spotlight({
  color = 'rgba(92,107,74,0.12)',
  size = 460,
}: {
  color?: string
  size?: number
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(640)
  const my = useMotionValue(280)
  const background = useMotionTemplate`radial-gradient(${size}px circle at ${mx}px ${my}px, ${color}, transparent 72%)`

  useEffect(() => {
    if (reduce) return
    const onMove = (e: PointerEvent) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) return
      mx.set((e.clientX - r.left) * (el.offsetWidth / r.width))
      my.set((e.clientY - r.top) * (el.offsetHeight / r.height))
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce, mx, my])

  if (reduce) return null
  return <motion.div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 z-0" style={{ background }} />
}
