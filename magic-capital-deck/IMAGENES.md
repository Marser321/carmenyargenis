# Imágenes del deck — slots e integración

Cada slide usa un slot definido en `src/content/images.ts`. El deck carga archivos desde `public/img/`; si falta alguno, muestra el placeholder "Imagen pendiente".

- Estética: documental/editorial, marfil/pizarra, azul petróleo y oliva, sin lujo ni hype.
- Los visuales de fundadores siguen siendo placeholders IA: reemplazar por fotos reales cuando estén disponibles.
- Los visuales conceptuales nuevos del documento oficial ya refinan el deck en `quienes` y `cambio1`.
- **Cambio 2 (`cambio2`) e Intensivo (`intensivo`) ya renderizan su imagen** (antes el slot existía pero el slide no la mostraba): `cambio2` la usa como tarjeta lateral y `intensivo` como fondo con scrim.
- **Encuadre (`encuadre`)**: usa un fondo de textura clara dedicado a ~10% de opacidad para no reutilizar la textura oscura de La Gran Idea.
- Los slides estructurales **Mapa**, **Esto sí/no** y **Objeciones** se complementan con iconografía SVG codificada (no imágenes), coherente con el estilo government-clean.

| Slide | Slot | Archivo destino | Origen | Ratio |
|---|---|---|---|---|
| Portada | `cover` | `public/img/cover-fundadores.png` | reutiliza `07-autoridad-argenis__hero-fundadores-espacio-titular.png` | 16:9 |
| Encuadre honesto | `encuadre` | `public/img/slide-02-encuadre-textura.png` | generado 2026-06-21 | 16:9 |
| Quiénes somos | `quienes` | `public/img/slide-03-mecanismo-dual-oportunidad-capital.png` | copia de `07-autoridad-argenis__mecanismo-dual-oportunidad-capital.png` | 16:9 |
| El problema | `problema` | `public/img/slide-04-problema-sistema-fuera.png` | generado 2026-06-20 | 1:1 |
| La Gran Idea | `granIdea` | `public/img/slide-05-gran-idea-textura-parcelas.png` | generado 2026-06-20 | 16:9 |
| ¿Qué es tax deed? | `queEs` | `public/img/portal-celular.png` | reutiliza `01-reserva-masterclass__agenda-portal-condado.png` | 9:16 |
| Cambio 1 · MAP-9 | `cambio1` | `public/img/slide-08-map-9-nueve-fases-framework.png` | copia de `03-compra-intensivo__map-9-nueve-fases-framework.png` | 16:9 |
| Cambio 2 · Capital | `cambio2` | `public/img/capital-calc.png` | reutiliza `03-compra-intensivo__transparencia-costos-calculadora-capital.png` | 1:1 |
| Cambio 3 · Proceso público | `cambio3` | `public/img/portal-laptop.png` | reutiliza `07-autoridad-argenis__prueba-pericia-portal-condado.png` | 4:5 |
| Caso real $7,500 | `caso` | `public/img/slide-13-caso-casa-pa.png` | generado 2026-06-20 | 4:5 |
| El Intensivo | `intensivo` | `public/img/intensivo-fundadores.png` | reutiliza `03-compra-intensivo__hero-fundadores-sesion-vivo.png` | 4:5 |
| Gracias | `gracias` | `public/img/gracias-fundadores.png` | reutiliza `01-reserva-masterclass__hero-fundadores-trabajando.png` | 16:9 |

## Prompts generados

**`slide-02-encuadre-textura.png` — textura clara de fondo para slide LUMINOSO (16:9).**
```
Very light, high-key editorial texture for a LIGHT slide background: a faint U.S. county parcel map merged with a subtle tax-ledger grid, extremely low contrast, predominantly ivory/off-white with the faintest slate and teal-navy lines, calm and quiet, designed to sit at ~10-12% opacity behind dark charcoal text. Ratio 16:9. [+ NEGATIVE]
```

**`slide-03-mecanismo-dual-oportunidad-capital.png` — Mecanismo dual (16:9).**
```
Minimal editorial conceptual image of two complementary pillars forming one complete system: left pillar suggests a county auction listing / property opportunity motif; right pillar suggests business-credit / capital structure motif; both join in the center as a balanced system. Ivory background, slate linework, teal-navy and desaturated olive accents. Ratio 16:9. [+ NEGATIVE]
```

**`slide-04-problema-sistema-fuera.png` — El sistema te dejó fuera (1:1).**
```
Documentary editorial photograph of a Latino person in their 30s looking at high home-listing prices on a phone at a kitchen table, sober and slightly worried expression, modest home, overcast natural light, muted ivory and slate tones, shallow depth of field, 35mm. Sense of being priced out of the traditional mortgage market. Ratio 1:1. [+ NEGATIVE]
```

**`slide-05-gran-idea-textura-parcelas.png` — La Gran Idea, textura de fondo (16:9).**
```
Subtle editorial texture background: a faint U.S. county parcel map overlaid with a tax-ledger grid, very low contrast, muted slate and ivory tones with a faint teal-navy tint, no text artifacts, no logos, cinematic and quiet, meant to sit behind a dark scrim with overlaid type. Ratio 16:9. [+ NEGATIVE]
```

**`slide-08-map-9-nueve-fases-framework.png` — MAP-9, nueve fases (16:9).**
```
Minimal editorial diagram of a 9-step methodology laid out as a clean numbered sequence from 01 to 09, each step as a small card, arranged as a calm grid flow on an ivory background. Government-clean, sober, Inter-style typography, teal-navy and desaturated olive accents, generous white space, no clutter. Ratio 16:9. [+ NEGATIVE]
```

**`slide-13-caso-casa-pa.png` — Caso $7,500, casa modesta en PA (4:5).**
```
Documentary editorial photograph of a modest small-town single-family house in rural Pennsylvania (Washington County feel), plain siding, overcast grey sky, bare trees, sober and honest, no people, muted slate and ivory tones, shallow depth of field, 35mm, realistic and unglamorous. Ratio 4:5. [+ NEGATIVE]
```

## Reemplazos recomendados

- Fotos reales de Argenis y Carmen para `cover`, `intensivo` y `gracias` siguen siendo la mejora de confianza más importante.
- Capturas reales anonimizadas de un portal de condado pueden reemplazar `queEs` y `cambio3` cuando estén disponibles.
