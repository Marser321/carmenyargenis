import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UrgencyBar } from './UrgencyBar'
import { LandingChrome } from './LandingChrome'
import { Footer } from './Footer'
import { FloatingWhatsApp } from './FloatingWhatsApp'
import { LiveActivityToasts } from './LiveActivityToasts'

/** Envuelve cada landing: barra fija + contenido + pie + WhatsApp flotante +
 *  toasts de actividad (prueba social simulada de la demo). `activity=false`
 *  los desactiva en páginas donde no aportan (p. ej. páginas de gracias). */
export function LandingLayout({
  children,
  waMessage,
  activity = true,
}: {
  children: ReactNode
  waMessage?: string
  activity?: boolean
}) {
  const { pathname } = useLocation()

  // Al cambiar de landing, vuelve arriba.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <div className="min-h-screen bg-midnight">
      <UrgencyBar />
      <LandingChrome />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp message={waMessage} />
      <LiveActivityToasts enabled={activity} />
    </div>
  )
}
