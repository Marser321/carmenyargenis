# Magic Capital · Deck de Masterclass

Presentación React animada de la **masterclass gratuita** de Magic Capital (techo del funnel tax deed).
Es un **sandbox local** para refinar copy y animación con la marca (trust-first, anti-hype) antes de
llevarlo a producción o a GHL Vibe. Sin formularios ni checkout: solo la experiencia.

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:5173  (ábrelo en una pestaña VISIBLE)
```

Otros scripts:

```bash
npm run build    # typecheck + bundle de producción a dist/
npm run preview  # sirve dist/ (estático, sin HMR)
```

> Las animaciones de entrada usan `requestAnimationFrame`; los navegadores **pausan rAF en pestañas
> ocultas/en segundo plano**, así que si abres el deck en una pestaña que no está al frente, el contenido
> puede quedar en su estado inicial (invisible) hasta que la pongas en foco. Es comportamiento normal del
> navegador; con la pestaña al frente todo anima correctamente.

## Controles

| Tecla | Acción |
|---|---|
| `→` `Espacio` `PageDown` `l` | Siguiente slide |
| `←` `PageUp` `h` | Slide anterior |
| `Home` / `End` | Primera / última |
| `O` | Índice (overview) — clic para saltar |
| `F` | Pantalla completa |
| `Esc` | Cerrar índice |

La URL guarda la slide (`#/7`): recargar o compartir abre esa misma slide.

## Dónde editar (el sandbox)

- **Copy** → [`src/content/copy.ts`](src/content/copy.ts) — TODO el texto en un solo archivo tipado.
  Incluye, como comentario, la lista de palabras/claims prohibidos por compliance.
- **Animación y paleta** → [`src/theme/tokens.ts`](src/theme/tokens.ts) — easing, duraciones, transición
  entre slides, presets de revelado. La paleta también vive en `tailwind.config.js`.
- **Orden / alta de slides** → [`src/deck/slides.ts`](src/deck/slides.ts) — registro ordenado (acto, fondo,
  título, componente). Reordenar o añadir slides se hace solo aquí.
- **Slides** → `src/slides/` — una por archivo; solo componen primitivas y leen `copy.ts`.
- **Primitivas** → `src/components/` — `Slide`, `Kicker`, `DisplayHeading`, `GlassCard`, `CTAButton`,
  `Reveal/Stagger`, `Disclaimer`, y los mocks animados `PortalMock`, `CapitalCalc`, `CaseBreakdown`.

## Estructura del deck (19 slides, 5 actos)

Apertura → El reencuadre → Los 3 cambios (Método MAP-9 · crédito empresarial al 0% · Proceso público) →
Prueba (portal · capital · caso $7,500 · esto sí/no) → El camino (intensivo · CTA) →
Cierre (objeciones · aviso legal · gracias).

## Compliance

El disclaimer §8 va literal en la slide "Aviso legal". El caso $7,500 siempre como *ejemplo puntual, no
resultado promedio, no auditado*. El crédito 0% siempre como *APR promocional sujeto a elegibilidad y
garantía personal*. Sin garantías de ingresos/crédito/aprobación, sin urgencia falsa.

## Stack

Vite · React 18 · TypeScript · Tailwind CSS 3 · Framer Motion · fuentes self-hosted (Inter + Geist, sin red).
