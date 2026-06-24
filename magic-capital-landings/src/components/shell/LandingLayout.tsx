import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { LandingChrome } from './LandingChrome'
import { Footer } from './Footer'
import { FloatingWhatsApp } from './FloatingWhatsApp'

/** Envuelve cada landing: barra fija + contenido + pie + WhatsApp flotante. */
export function LandingLayout({ children, waMessage }: { children: ReactNode; waMessage?: string }) {
  const { pathname } = useLocation()

  // Al cambiar de landing, vuelve arriba.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <div className="min-h-screen bg-ivory">
      <LandingChrome />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp message={waMessage} />
    </div>
  )
}
