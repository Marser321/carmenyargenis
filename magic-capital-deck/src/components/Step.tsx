import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useStep } from '../deck/StepContext'
import { ease } from '../theme/tokens'

/**
 * Revela su contenido cuando el paso actual del deck alcanza `at`.
 * Pensado para construir una slide densa punto por punto (avanzando con →).
 * `at={0}` aparece en la entrada de la slide; `at>=1` espera al paso correspondiente.
 * Reduced-motion → aparece sin desplazamiento (sigue respetando los pasos).
 */
export function Step({
  at,
  children,
  className,
  subtle = false,
}: {
  at: number
  children: ReactNode
  className?: string
  subtle?: boolean
}) {
  const step = useStep()
  const reduce = useReducedMotion()
  const shown = step >= at
  const rise = reduce ? 0 : subtle ? 10 : 20

  return (
    <motion.div
      className={className}
      data-step={at}
      data-shown={shown ? '1' : '0'}
      initial="hidden"
      animate={shown ? 'show' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: rise, filter: reduce ? 'none' : 'blur(2px)' },
        show: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      transition={{ duration: reduce ? 0 : subtle ? 0.45 : 0.55, ease: ease.out }}
    >
      {children}
    </motion.div>
  )
}
