import type { SVGProps } from 'react'

// Íconos SVG mínimos, stroke = currentColor (sobrios, sin relleno).
function Base({ children, ...p }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      aria-hidden="true"
      {...p}
    >
      {children}
    </svg>
  )
}

export const ChevronLeft = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M15 18l-6-6 6-6" />
  </Base>
)

export const ChevronRight = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M9 18l6-6-6-6" />
  </Base>
)

export const Grid = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </Base>
)

export const Expand = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M3 16v3a2 2 0 0 0 2 2h3" />
  </Base>
)

export const Question = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M9.1 9a3 3 0 1 1 4.5 2.6c-.9.5-1.6 1.2-1.6 2.4" />
    <path d="M12 17h.01" />
  </Base>
)

export const Close = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Base>
)

// ── Íconos de contenido (complementos sobrios para slides estructurales) ──

export const Check = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Base>
)

export const Filter = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
  </Base>
)

export const Percent = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M19 5 5 19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </Base>
)

export const Landmark = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M3 21h18M5 10h14M12 4 4 8h16zM6 10v8M10 10v8M14 10v8M18 10v8" />
  </Base>
)

export const Shield = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
)

export const Document = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M9 13h6M9 17h6" />
  </Base>
)

export const Globe = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Base>
)

// ── Íconos para los bonos del intensivo ──

export const Map = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
    <path d="M9 4v14M15 6v14" />
  </Base>
)

export const Calendar = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M3 10h18M8 2v4M16 2v4" />
  </Base>
)

export const CreditCard = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20M6 15h4" />
  </Base>
)

export const Users = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
  </Base>
)

export const Pulse = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M3 12h4l2 6 4-14 2 8h6" />
  </Base>
)
