import { useEffect } from 'react'

/** Gestos swipe táctiles (phone-first). Ignora el mouse para no interferir con clics. */
export function useSwipe(onNext: () => void, onPrev: () => void, threshold = 50) {
  useEffect(() => {
    let startX = 0
    let startY = 0
    let tracking = false

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') return
      startX = e.clientX
      startY = e.clientY
      tracking = true
    }
    const onUp = (e: PointerEvent) => {
      if (!tracking) return
      tracking = false
      const dx = e.clientX - startX
      const dy = e.clientY - startY
      if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) onNext()
        else onPrev()
      }
    }

    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
    }
  }, [onNext, onPrev, threshold])
}
