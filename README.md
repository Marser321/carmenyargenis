# Magic Capital — Web (funnel + deck)

Monorepo con las **dos apps React** de Magic Capital (tax deed · trust-first, anti-hype). Se despliegan en
Vercel como **dos proyectos independientes**, cada uno apuntando a su subcarpeta.

| App | Carpeta | Qué es | Dev local |
|---|---|---|---|
| **Funnel de landings** | [`magic-capital-landings/`](magic-capital-landings/) | Hub + 8 landings + lead-magnets (funnel mock, sin backend) | `npm run dev` → `:5190` |
| **Deck de masterclass** | [`magic-capital-deck/`](magic-capital-deck/) | Presentación de 23 slides de la masterclass gratuita | `npm run dev` → `:5173` |

Ambas: Vite 5 · React 18 · TypeScript · Tailwind 3 · Framer Motion. Ver el README de cada carpeta para detalle.

## Correr en local

```bash
# Funnel
cd magic-capital-landings && npm install && npm run dev

# Deck
cd magic-capital-deck && npm install && npm run dev
```

## Desplegar en Vercel (2 proyectos)

Crea **un proyecto Vercel por app**, importando este mismo repo y cambiando el **Root Directory**:

| Proyecto | Root Directory | Framework | Build | Output | Install |
|---|---|---|---|---|---|
| magic-capital-landings | `magic-capital-landings` | Vite (auto) | `npm run build` | `dist` | `npm install` |
| magic-capital-deck | `magic-capital-deck` | Vite (auto) | `npm run build` | `dist` | `npm install` |

Pasos para cada uno: **Add New → Project → Import** este repo → en *Configure Project* fija el **Root Directory**
a la subcarpeta correspondiente → Deploy. Vercel detecta Vite y usa el `vite.config.ts` + `package.json` de esa carpeta.

Cada app incluye un `vercel.json` con un *rewrite* a `/index.html` para que el routing del lado del cliente
(rutas como `/l/03-intensivo`) funcione al refrescar o entrar directo.

## Antes de publicar (datos reales del cliente)

En `magic-capital-landings/src/content/brand.ts`:
- `CONTACT` — número de WhatsApp, correo y URL pública del deck reales.
- `COHORTE` — fecha/hora reales del Intensivo y horario de soporte.

Y validar con asesoría legal la redacción del "compromiso" en `src/landings/CompraMentoria.tsx`
(promete acompañamiento/método, no resultados — mantener ese enfoque). Todo lo demás es funcional con mocks.
