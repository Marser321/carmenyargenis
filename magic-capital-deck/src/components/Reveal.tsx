import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { revealItem, revealItemSubtle, stagger } from '../theme/tokens'

/** Contenedor que escalona la entrada de sus hijos <Reveal/>. */
export function Stagger({
  children,
  className,
  gap = 0.09,
  delay = 0.12,
}: {
  children: ReactNode
  className?: string
  gap?: number
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      variants={stagger(gap, delay)}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  )
}

/** Item individual revelado. Debe vivir dentro de <Stagger/>. */
export function Reveal({
  children,
  className,
  subtle = false,
}: {
  children: ReactNode
  className?: string
  subtle?: boolean
}) {
  return (
    <motion.div className={className} variants={subtle ? revealItemSubtle : revealItem}>
      {children}
    </motion.div>
  )
}
