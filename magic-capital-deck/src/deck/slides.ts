import type { ComponentType } from 'react'
import { Cover } from '../slides/S00Cover'
import { Perfiles } from '../slides/SPerfiles'
import { Encuadre } from '../slides/S01Encuadre'
import { Quienes } from '../slides/S02Quienes'
import { Mapa } from '../slides/S06Mapa'
import { Problema } from '../slides/S03Problema'
import { GranIdea } from '../slides/S04GranIdea'
import { QueEs } from '../slides/S05QueEs'
import { TiposSubasta } from '../slides/STiposSubasta'
import { Cambio3 } from '../slides/S09Cambio3'
import { Demo } from '../slides/S10Demo'
import { Cambio1 } from '../slides/S07Cambio1'
import { Cambio2 } from '../slides/S08Cambio2'
import { Capital } from '../slides/S11Capital'
import { Caso } from '../slides/S12Caso'
import { SiNo } from '../slides/S13SiNo'
import { Intensivo } from '../slides/S14Intensivo'
import { Bonos } from '../slides/SBonos'
import { Anclaje } from '../slides/SAnclaje'
import { CTA } from '../slides/S15CTA'
import { Objeciones } from '../slides/S16Objeciones'
import { DisclaimerSlide } from '../slides/S17Disclaimer'
import { Gracias } from '../slides/S18Gracias'

export type SlideMeta = {
  act: string
  title: string
  bg: 'light' | 'dark'
  Component: ComponentType
  /** Sub-pasos de "build" dentro de la slide (→ avanza pasos antes de saltar de slide). 0 = sin pasos. */
  steps?: number
}

/**
 * Registro ordenado del deck de la masterclass (alineado a "Promesa Masterclass" 2026-06-23).
 * Para añadir/reordenar slides, edita solo esta lista (y sus imports).
 * Flujo: apertura → qué vas a aprender → lo que enseñamos → prueba + oferta (27/jun) → cierre.
 */
export const slides: SlideMeta[] = [
  // ── Apertura ──
  { act: 'Apertura', title: 'Portada', bg: 'dark', Component: Cover },
  { act: 'Apertura', title: '¿Esto es para ti?', bg: 'light', Component: Perfiles, steps: 3 },
  { act: 'Apertura', title: 'Exigimos que desconfíes', bg: 'light', Component: Encuadre },
  { act: 'Apertura', title: 'Quiénes te enseñan', bg: 'dark', Component: Quienes },

  // ── El reencuadre / qué vas a aprender ──
  { act: 'El reencuadre', title: 'Qué vas a aprender hoy', bg: 'dark', Component: Mapa, steps: 5 },
  { act: 'El reencuadre', title: 'El sistema te dejó fuera', bg: 'light', Component: Problema },
  { act: 'El reencuadre', title: 'La Gran Idea', bg: 'dark', Component: GranIdea },
  { act: 'El reencuadre', title: '¿Qué es tax deed?', bg: 'light', Component: QueEs },
  { act: 'El reencuadre', title: 'Tipos de subasta', bg: 'dark', Component: TiposSubasta, steps: 2 },

  // ── Lo que enseñamos hoy ──
  { act: 'Lo que enseñamos', title: 'Cómo encontrar las listas', bg: 'light', Component: Cambio3, steps: 3 },
  { act: 'Lo que enseñamos', title: 'Demo · Portal de condado', bg: 'dark', Component: Demo },
  { act: 'Lo que enseñamos', title: 'Las 9 fases · MAP-9', bg: 'light', Component: Cambio1, steps: 3 },
  { act: 'Lo que enseñamos', title: 'Crédito al 0% · Carmen', bg: 'dark', Component: Cambio2, steps: 3 },

  // ── La prueba y la oferta ──
  { act: 'La prueba y la oferta', title: 'Capital total de entrada', bg: 'light', Component: Capital },
  { act: 'La prueba y la oferta', title: 'Caso real', bg: 'dark', Component: Caso },
  { act: 'La prueba y la oferta', title: 'Esto sí / Esto no', bg: 'light', Component: SiNo, steps: 2 },
  { act: 'La prueba y la oferta', title: 'El Intensivo · 27 de junio', bg: 'dark', Component: Intensivo },
  { act: 'La prueba y la oferta', title: 'Los bonos', bg: 'light', Component: Bonos },
  { act: 'La prueba y la oferta', title: 'El valor y el precio', bg: 'dark', Component: Anclaje },

  // ── Cierre ──
  { act: 'Cierre', title: 'Reserva tu lugar', bg: 'dark', Component: CTA },
  { act: 'Cierre', title: 'Objeciones honestas', bg: 'light', Component: Objeciones, steps: 4 },
  { act: 'Cierre', title: 'Aviso legal', bg: 'light', Component: DisclaimerSlide },
  { act: 'Cierre', title: 'Gracias', bg: 'dark', Component: Gracias },
]
