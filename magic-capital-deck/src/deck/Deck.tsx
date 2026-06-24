import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slides } from './slides'
import { slideVariants, slideTransition } from '../theme/tokens'
import { useKeyboardNav } from './useKeyboardNav'
import { useSwipe } from './useSwipe'
import { DeckChrome } from './DeckChrome'
import { Overview } from './Overview'
import { Onboarding } from './Onboarding'
import { Help } from './Help'
import { StepContext } from './StepContext'

const STAGE_W = 1280
const STAGE_H = 720
const ONBOARDED_KEY = 'mc-deck-onboarded'

function parseHash(): number {
  const m = window.location.hash.match(/^#\/(\d+)/)
  if (!m) return 0
  const n = parseInt(m[1], 10) - 1
  return Number.isFinite(n) ? Math.min(Math.max(n, 0), slides.length - 1) : 0
}

const clamp = (i: number) => Math.min(Math.max(i, 0), slides.length - 1)
const stepsOf = (i: number) => slides[i]?.steps ?? 0

type Nav = { index: number; step: number; dir: number }

export function Deck() {
  // { índice, paso dentro de la slide, dirección } — dir alimenta la transición direccional.
  const [{ index, step, dir: direction }, setNav] = useState<Nav>(() => ({
    index: parseHash(),
    step: 0,
    dir: 0,
  }))
  const [overview, setOverview] = useState(false)
  const [help, setHelp] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [scale, setScale] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  // Onboarding de primer uso (una sola vez).
  useEffect(() => {
    try {
      if (!localStorage.getItem(ONBOARDED_KEY)) setShowOnboarding(true)
    } catch {
      /* localStorage no disponible */
    }
  }, [])

  const dismissOnboarding = useCallback(() => {
    setShowOnboarding(false)
    try {
      localStorage.setItem(ONBOARDED_KEY, '1')
    } catch {
      /* ignore */
    }
  }, [])

  // Escalado uniforme del escenario 1280×720 al tamaño real del contenedor.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const fit = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      if (w > 0 && h > 0) setScale(Math.min(w / STAGE_W, h / STAGE_H))
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // hash → estado (saltar a una slide siempre reinicia los pasos)
  useEffect(() => {
    const onHash = () =>
      setNav((cur) => {
        const n = parseHash()
        return { index: n, step: 0, dir: n >= cur.index ? 1 : -1 }
      })
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // estado → hash
  useEffect(() => {
    const target = `#/${index + 1}`
    if (window.location.hash !== target) window.history.replaceState(null, '', target)
  }, [index])

  // → avanza un paso dentro de la slide; al agotarlos salta a la siguiente (paso 0).
  const next = useCallback(
    () =>
      setNav((cur) => {
        if (cur.step < stepsOf(cur.index)) return { ...cur, step: cur.step + 1, dir: 1 }
        if (cur.index >= slides.length - 1) return cur
        return { index: cur.index + 1, step: 0, dir: 1 }
      }),
    [],
  )
  // ← retrocede un paso; al llegar a 0 vuelve a la slide previa ya construida (paso máximo).
  const prev = useCallback(
    () =>
      setNav((cur) => {
        if (cur.step > 0) return { ...cur, step: cur.step - 1, dir: -1 }
        if (cur.index <= 0) return cur
        const p = cur.index - 1
        return { index: p, step: stepsOf(p), dir: -1 }
      }),
    [],
  )
  const first = useCallback(() => setNav((cur) => ({ index: 0, step: 0, dir: cur.index <= 0 ? 1 : -1 })), [])
  const last = useCallback(
    () =>
      setNav((cur) => {
        const n = slides.length - 1
        return { index: n, step: stepsOf(n), dir: cur.index >= n ? 1 : -1 }
      }),
    [],
  )
  const go = useCallback(
    (i: number) => setNav((cur) => { const n = clamp(i); return { index: n, step: 0, dir: n >= cur.index ? 1 : -1 } }),
    [],
  )

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {})
    else document.exitFullscreen?.().catch(() => {})
  }, [])

  const toggleOverview = useCallback(() => setOverview((o) => !o), [])
  const toggleHelp = useCallback(() => setHelp((h) => !h), [])
  const onEscape = useCallback(() => {
    setOverview(false)
    setHelp(false)
  }, [])

  useKeyboardNav({ next, prev, first, last, toggleFullscreen, toggleOverview, toggleHelp, onEscape })
  useSwipe(next, prev)

  const meta = slides[index]
  const Current = meta.Component

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden bg-[#0b0c0d]">
      <div className="absolute inset-0">
        {/* Centrado absoluto: translate(-50%,-50%) usa el tamaño propio del escenario,
            así queda centrado a CUALQUIER ancho (incl. < 1280px / móvil), no solo en desktop. */}
        <div
          className="absolute left-1/2 top-1/2 overflow-hidden rounded-xl shadow-2xl"
          style={{
            width: STAGE_W,
            height: STAGE_H,
            transform: `translate(-50%, -50%) scale(${scale})`,
            transformOrigin: 'center center',
          }}
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={index}
              custom={direction}
              className="absolute inset-0 h-full w-full"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
            >
              <StepContext.Provider value={step}>
                <Current />
              </StepContext.Provider>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <DeckChrome
        index={index}
        total={slides.length}
        step={step}
        maxSteps={meta.steps ?? 0}
        act={meta.act}
        title={meta.title}
        bg={meta.bg}
        onPrev={prev}
        onNext={next}
        onGo={go}
        onOverview={toggleOverview}
        onHelp={toggleHelp}
        onFullscreen={toggleFullscreen}
      />

      <AnimatePresence>
        {overview && (
          <Overview
            current={index}
            onPick={(i) => {
              go(i)
              setOverview(false)
            }}
            onClose={() => setOverview(false)}
          />
        )}
        {help && <Help onClose={() => setHelp(false)} />}
        {showOnboarding && <Onboarding onDismiss={dismissOnboarding} />}
      </AnimatePresence>
    </div>
  )
}
