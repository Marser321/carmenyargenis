// ─────────────────────────────────────────────────────────────────────────
//  Rutas de imágenes. Las imágenes se copian a /public/img por el script
//  scripts/copy-assets.ps1 (curadas de landings-listas/<NN>/imagenes, fondos,
//  lead-magnets y fotos reales de fundadores). `Img` degrada a placeholder
//  elegante si un archivo falta, así que nada rompe si algo no se copió.
// ─────────────────────────────────────────────────────────────────────────

/** Imagen curada de una landing: /img/<num>/<file>. */
export function img(num: string, file: string): string {
  return `/img/${num}/${file}`
}

/** Fondo animable (catálogo landings-listas/_fondos). */
export function bg(file: string): string {
  return `/img/backgrounds/${file}`
}

/** Portada de lead magnet. */
export function lm(file: string): string {
  return `/img/lead-magnets/${file}`
}

/** Foto real de estudio de fundadores. */
export function founder(file: string): string {
  return `/img/founders/${file}`
}

export type Ratio = '16x9' | '4x5' | '1x1' | '9x16' | '21x9' | '3x2'

export const RATIO_CLASS: Record<Ratio, string> = {
  '16x9': 'aspect-[16/9]',
  '4x5': 'aspect-[4/5]',
  '1x1': 'aspect-square',
  '9x16': 'aspect-[9/16]',
  '21x9': 'aspect-[21/9]',
  '3x2': 'aspect-[3/2]',
}
