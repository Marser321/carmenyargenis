// ─────────────────────────────────────────────────────────────────────────
//  Tokens de marca + presets de animación.
//  Única fuente para el "feel" visual y de movimiento del deck.
//  Paleta y tipografía: 00-SISTEMA-marca-y-compliance.md §5.
// ─────────────────────────────────────────────────────────────────────────

// Pivote navy + dorado (paridad con el funnel). `charcoal`/`petrol` se remapean a
// navy y `olive` a dorado para que las clases existentes rindan el nuevo estilo.
export const palette = {
  ivory: '#F7F5F0',
  charcoal: '#0A1426',
  petrol: '#0F2036',
  olive: '#C9A24B',
  smoke: '#8A8F94',
  midnight: '#0A1426',
  navy: '#0F2036',
  gold: '#C9A24B',
} as const

// Curvas de easing (cubic-bezier). `out` = entrada suave y decidida.
export const ease = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
}

// Transición entre slides (la usa AnimatePresence en Deck.tsx)
export const slideMotion = {
  initial: { opacity: 0, scale: 0.992, y: 14 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.996, y: -10 },
  transition: { duration: 0.55, ease: ease.out },
}

// Contenedor que escalona la entrada de sus hijos (<Reveal/>)
export const stagger = (staggerChildren = 0.09, delayChildren = 0.12) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
})

// Item individual revelado (sube + aparece)
export const revealItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ease.out } },
}

export const revealItemSubtle = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.out } },
}

// Transición direccional entre slides (custom = dirección: +1 avanzar, -1 retroceder).
// Ligero "push" en profundidad: la entrante llega desde más lejos y un punto más
// pequeña; la saliente cede hacia atrás. Sobrio, sin marear.
export const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir >= 0 ? 72 : -72, scale: 0.984 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir: number) => ({ opacity: 0, x: dir >= 0 ? -52 : 52, scale: 0.99 }),
}

export const slideTransition = { duration: 0.55, ease: ease.out }

// Hover sobre tarjetas interactivas
export const cardHover = {
  rest: { y: 0 },
  hover: { y: -4, transition: { duration: 0.25, ease: ease.out } },
}

// Parallax de profundidad (fondos multicapa reactivos al puntero — DepthBackground).
// `amplitude` = px de desplazamiento a profundidad 1; las capas se sobreescalan
// (`layerScale`) para que no asomen los bordes al desplazarse.
export const parallax = {
  amplitude: 28,
  spring: { stiffness: 55, damping: 22, mass: 0.6 },
  layerScale: 1.06,
} as const
