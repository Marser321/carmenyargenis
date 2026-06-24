import type { ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

/** Parallax/tilt sutil reactivo al mouse. Desactivado en reduced-motion. */
export function Tilt({
  children,
  className,
  max = 5,
}: {
  children: ReactNode
  className?: string
  max?: number
}) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 140, damping: 18 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 140, damping: 18 })

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}
