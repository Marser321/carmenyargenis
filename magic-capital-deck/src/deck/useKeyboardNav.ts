import { useEffect } from 'react'

type Handlers = {
  next: () => void
  prev: () => void
  first: () => void
  last: () => void
  toggleFullscreen: () => void
  toggleOverview: () => void
  toggleHelp: () => void
  onEscape: () => void
}

/** Atajos de teclado del deck. */
export function useKeyboardNav(h: Handlers) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
        case 'l':
          e.preventDefault()
          h.next()
          break
        case 'ArrowLeft':
        case 'PageUp':
        case 'h':
          e.preventDefault()
          h.prev()
          break
        case 'Home':
          e.preventDefault()
          h.first()
          break
        case 'End':
          e.preventDefault()
          h.last()
          break
        case 'f':
        case 'F':
          h.toggleFullscreen()
          break
        case 'o':
        case 'O':
          h.toggleOverview()
          break
        case '?':
          h.toggleHelp()
          break
        case 'Escape':
          h.onEscape()
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [h])
}
