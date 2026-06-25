import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { Img } from './Img'
import { useIsCoarsePointer } from '../../lib/useIsCoarsePointer'

/**
 * Banner de video con ciclo: al entrar reproduce el video del dispositivo UNA vez,
 * luego se queda en el último fotograma (estático) `holdMs` (15 s) y vuelve a
 * reproducir — en bucle.
 *
 * Degradaciones seguras (espejo de VideoBackground):
 *  • móvil/táctil → fuente `vertical` (retrato 9:16); desktop → `horizontal` (16:9).
 *    Solo se monta UNA fuente (no descarga las dos).
 *  • reduced-motion → no reproduce ni cicla; deja el primer fotograma fijo.
 *  • fuera de viewport → pausa y limpia el timer (IntersectionObserver).
 *  • onError → cae al placeholder elegante de <Img> (la demo nunca se rompe).
 * El <video> va `muted playsInline` (autoplay permitido al estar muteado). Se usa
 * `src` como atributo (no <source>): al cambiar de orientación, el navegador
 * recarga y reanuda solo, sin un load() manual que aborte el autoplay.
 */
export function BannerVideoCycle({
  horizontal,
  vertical,
  alt,
  holdMs = 15000,
  className,
}: {
  horizontal: string
  vertical: string
  alt: string
  holdMs?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  const coarse = useIsCoarsePointer()
  const ref = useRef<HTMLVideoElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [failed, setFailed] = useState(false)

  const src = coarse ? vertical : horizontal
  // Aspecto igualado a la fuente para que object-cover no recorte el flyer.
  const ratioClass = coarse ? 'aspect-[9/16]' : 'aspect-video'

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  // Reproduce cuando está en viewport; pausa y limpia el timer al salir.
  // (También arranca el autoplay inicial si el navegador no lo disparó solo.)
  useEffect(() => {
    if (reduce || failed) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (el.paused && !timerRef.current) el.play().catch(() => {})
        } else {
          el.pause()
          clearTimer()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      clearTimer()
    }
  }, [reduce, failed, src])

  const handleEnded = () => {
    clearTimer()
    // Se queda en el último fotograma (estático) y reinicia tras holdMs.
    timerRef.current = setTimeout(() => {
      timerRef.current = null
      const v = ref.current
      if (!v) return
      v.currentTime = 0
      v.play().catch(() => {})
    }, holdMs)
  }

  if (failed) {
    return <Img src={undefined} alt={alt} label={alt} className={cn(ratioClass, className)} kenBurns={false} />
  }

  return (
    <div className={cn('relative overflow-hidden rounded-2xl bg-charcoal-soft gold-hairline shadow-glass-dark', ratioClass, className)}>
      <video
        ref={ref}
        key={src}
        src={src}
        muted
        playsInline
        autoPlay={!reduce}
        preload="auto"
        aria-label={alt}
        onEnded={handleEnded}
        onLoadedMetadata={(e) => {
          // reduced-motion: no se reproduce → muestra el último fotograma (el flyer
          // ya armado) en vez de quedar en negro.
          if (reduce) {
            const el = e.currentTarget
            if (Number.isFinite(el.duration)) el.currentTime = Math.max(0, el.duration - 0.05)
          }
        }}
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
    </div>
  )
}
