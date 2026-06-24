import { MotionConfig } from 'framer-motion'
import { Deck } from './deck/Deck'

export default function App() {
  // reducedMotion="user" → Framer Motion respeta prefers-reduced-motion del sistema.
  return (
    <MotionConfig reducedMotion="user">
      <Deck />
    </MotionConfig>
  )
}
