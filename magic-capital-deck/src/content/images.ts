// ─────────────────────────────────────────────────────────────────────────
//  MANIFEST DE IMÁGENES — fuente única de `src`, prompt y alt por slot.
//  Estética y receta: prompts-landings/00-GUIA-estilo-imagenes.md
//  El deck lee `src` (archivo en /public/img). Si falta, <Img> muestra un
//  placeholder elegante. El `prompt` es el entregable para generar imágenes.
//  Doc legible para el cliente: ver magic-capital-deck/IMAGENES.md
// ─────────────────────────────────────────────────────────────────────────

export const NEGATIVE =
  'NEGATIVE / AVOID: luxury cars, mansions, gold watches, cash stacks/money fans, champagne, private jets, fluorescent or neon gradients, oversaturated colors, cheesy stock smiles, clip-art icons, fake 3D, lens flares, "guru" vibes, exclamation graphics, red arrows, "secret/hack" badges, countdown timers, watermark, text artifacts, distorted hands.'

export type ImageSlot = {
  src?: string // '' / undefined → placeholder
  alt: string
  ratio: string
  focal?: string
  reused?: string // archivo original en imagenes-landings/ del que proviene
  prompt: string
}

export const images: Record<string, ImageSlot> = {
  cover: {
    src: '/img/cover-fundadores.png',
    alt: 'Argenis y Carmen revisando un portal de subastas tax deed en una laptop.',
    ratio: '16:9',
    focal: '50% 38%',
    reused: '07-autoridad-argenis__hero-fundadores-espacio-titular.png',
    prompt:
      'Documentary editorial photograph of two Latino entrepreneurs (man and woman, 30s-40s), moderate professional attire, seen over-the-shoulder reviewing a U.S. county tax-deed auction website on a laptop in a real, modest home-office. Natural window light, muted ivory and slate tones, shallow depth of field, 35mm, candid serious and trustworthy mood. Color grade warm neutral with navy and gold accents. Generous negative space on the left for a headline overlay. Faces not the focus. Ratio 16:9. ' +
      NEGATIVE,
  },
  encuadre: {
    // Fondo MUY tenue para slide CLARO (se renderiza a ~10% de opacidad bajo texto oscuro).
    // Asset dedicado para no reutilizar la textura oscura de La Gran Idea.
    src: '/img/slide-02-encuadre-textura.png',
    alt: 'Textura editorial tenue de registro fiscal y parcelas, de fondo del encuadre honesto.',
    ratio: '16:9',
    focal: '50% 50%',
    reused: 'asset dedicado generado 2026-06-21',
    prompt:
      'Very light, high-key editorial texture for a LIGHT slide background: a faint U.S. county parcel map merged with a subtle tax-ledger grid, extremely low contrast, predominantly ivory/off-white with the faintest slate, navy and faint gold lines, calm and quiet, designed to sit at ~10-12% opacity behind dark charcoal text. Ratio 16:9. ' +
      NEGATIVE,
  },
  quienes: {
    src: '/img/slide-03-mecanismo-dual-oportunidad-capital.png',
    alt: 'Diagrama del mecanismo dual: oportunidad tax deed y capital empresarial trabajando como un sistema.',
    ratio: '16:9',
    focal: '50% 50%',
    reused: '07-autoridad-argenis__mecanismo-dual-oportunidad-capital.png',
    prompt:
      'Minimal editorial conceptual image of two complementary pillars forming one complete system: left pillar suggests a county auction listing / property opportunity motif; right pillar suggests business-credit / capital structure motif; both join in the center as a balanced system. Ivory background, slate linework, navy and gold accents. Ratio 16:9. ' +
      NEGATIVE,
  },
  problema: {
    src: '/img/slide-04-problema-sistema-fuera.png',
    alt: 'Persona latina mirando precios de vivienda altos en el celular, expresión seria.',
    ratio: '1:1',
    focal: '50% 40%',
    prompt:
      'Documentary editorial photograph of a Latino person in their 30s looking at high home-listing prices on a phone at a kitchen table, sober and slightly worried expression, modest home, overcast natural light, muted ivory and slate tones, shallow depth of field, 35mm. Sense of being priced out of the traditional mortgage market. Ratio 1:1. ' +
      NEGATIVE,
  },
  granIdea: {
    src: '/img/slide-05-gran-idea-textura-parcelas.png',
    alt: 'Mapa de parcelas de un condado y registro fiscal, textura editorial tenue.',
    ratio: '16:9',
    focal: '50% 50%',
    prompt:
      'Subtle editorial texture background: a faint U.S. county parcel map overlaid with a tax-ledger grid, very low contrast, muted slate and ivory tones with a faint navy and gold tint, no text artifacts, no logos, cinematic and quiet, meant to sit behind a dark scrim with overlaid type. Ratio 16:9. ' +
      NEGATIVE,
  },
  queEs: {
    src: '/img/portal-celular.png',
    alt: 'Portal de subastas del condado en un celular: calendario y listado de casos.',
    ratio: '9:16',
    focal: '50% 50%',
    reused: '01-reserva-masterclass__agenda-portal-condado.png',
    prompt:
      'Realistic clean mockup of a U.S. county tax-deed auction web portal on a phone screen held in hand, showing a calendar of sale dates and a list of properties with case numbers, government-style neutral UI, muted ivory/slate palette with navy and gold accents, no logos, no real names, Spanish-friendly layout, natural light. Ratio 9:16. ' +
      NEGATIVE,
  },
  cambio1: {
    src: '/img/slide-08-map-9-nueve-fases-framework.png',
    alt: 'Diagrama editorial del Método MAP-9 con nueve fases numeradas.',
    ratio: '16:9',
    focal: '50% 50%',
    reused: '03-compra-intensivo__map-9-nueve-fases-framework.png',
    prompt:
      'Minimal editorial diagram of a 9-step methodology laid out as a clean numbered sequence from 01 to 09, each step as a small card, arranged as a calm grid flow on an ivory background. Government-clean, sober, Inter-style typography, navy and gold accents, generous white space, no clutter. Ratio 16:9. ' +
      NEGATIVE,
  },
  cambio2: {
    src: '/img/capital-calc.png',
    alt: 'Hoja de cálculo del capital total de entrada con tarjetas limpias.',
    ratio: '1:1',
    focal: '50% 50%',
    reused: '03-compra-intensivo__transparencia-costos-calculadora-capital.png',
    prompt:
      'Minimal editorial UI mockup of a "total entry capital" worksheet: bid + county fees + title work + contingency + holding shown as clean cards with conservative numbers, ivory background, navy and gold accents, Inter-style typography, generous white space, no clutter, no text artifacts. Ratio 1:1. ' +
      NEGATIVE,
  },
  cambio3: {
    src: '/img/portal-laptop.png',
    alt: 'Portal de subastas del condado en una laptop, UI gubernamental neutra.',
    ratio: '4:5',
    focal: '50% 50%',
    reused: '07-autoridad-argenis__prueba-pericia-portal-condado.png',
    prompt:
      'Realistic clean mockup of a U.S. county tax-deed auction web portal on a laptop screen, calendar of sale dates and property list with case numbers, government-style neutral UI, muted ivory/slate palette with navy and gold accents, modest desk, natural light, no logos, no real names. Ratio 4:5. ' +
      NEGATIVE,
  },
  caso: {
    src: '/img/slide-13-caso-casa-pa.png',
    alt: 'Casa modesta de pueblo en Pennsylvania, cielo gris, sin lujo.',
    ratio: '4:5',
    focal: '50% 55%',
    prompt:
      'Documentary editorial photograph of a modest small-town single-family house in rural Pennsylvania (Washington County feel), plain siding, overcast grey sky, bare trees, sober and honest, no people, muted slate and ivory tones, shallow depth of field, 35mm, realistic and unglamorous. Ratio 4:5. ' +
      NEGATIVE,
  },
  intensivo: {
    src: '/img/intensivo-fundadores.png',
    alt: 'Sesión de trabajo en vivo: los fundadores revisando un listado de subasta.',
    ratio: '4:5',
    focal: '50% 45%',
    reused: '03-compra-intensivo__hero-fundadores-sesion-vivo.png',
    prompt:
      'Documentary editorial photograph of two Latino entrepreneurs leading a small live working session over a laptop in a modest home-office, reviewing a county auction listing together, over-the-shoulder, faces not the focus. Natural window light, muted ivory and slate tones with navy and gold accents, shallow depth of field, 35mm, candid and trustworthy. Ratio 4:5. ' +
      NEGATIVE,
  },
  gracias: {
    src: '/img/gracias-fundadores.png',
    alt: 'Los fundadores trabajando, tono sereno de cierre.',
    ratio: '16:9',
    focal: '50% 40%',
    reused: '01-reserva-masterclass__hero-fundadores-trabajando.png',
    prompt:
      'Documentary editorial photograph of two Latino entrepreneurs over-the-shoulder reviewing a U.S. county tax-auction website on a laptop in a modest home-office, calm and resolved mood, natural window light, muted ivory and slate tones with navy and gold accents, shallow depth of field, 35mm. Ratio 16:9. ' +
      NEGATIVE,
  },
}
