import { useEffect, useState } from 'react'
import { animate, useReducedMotion } from 'framer-motion'
import { ease } from '../theme/tokens'

/** Número que cuenta hasta `to` al montar. Snap inmediato si reduced-motion. */
export function CountUp({
  to,
  from = 0,
  duration = 1.2,
  delay = 0.3,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}: {
  to: number
  from?: number
  duration?: number
  delay?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const reduce = useReducedMotion()
  const [val, setVal] = useState(reduce ? to : from)

  useEffect(() => {
    if (reduce) {
      setVal(to)
      return
    }
    const controls = animate(from, to, {
      duration,
      delay,
      ease: ease.out,
      onUpdate: (v) => setVal(v),
    })
    return () => controls.stop()
  }, [to, from, duration, delay, reduce])

  const text =
    prefix +
    val.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) +
    suffix

  return <span className={className}>{text}</span>
}
