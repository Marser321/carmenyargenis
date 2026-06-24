# Magic Capital — Prompts de generación de assets (imágenes + video)

Guía para generar la **capa cinematográfica** del funnel (fase "magia"). Todo está cableado para
recibir estos assets sin tocar código: las imágenes ya tienen su slot en `src/content/images.ts`
(`public/img/...`) y los **loops de video** entran por la prop `video` del `Hero` (hoy muestra el
poster; al pasar `image.video` reproduce el bucle — ver "Cómo enchufar los videos" al final).

---

## 0 · ADN visual (pegar como estilo base en TODA generación)

> **Estética:** documental sobrio, editorial financiero, luz natural tenue, grano fílmico sutil,
> profundidad de campo cinematográfica. Latino/EE.UU., creíble y cercano (NO stock corporativo, NO
> lujo brillante, NO render 3D plástico). Composición tranquila, encuadre intencional.
>
> **Paleta (respétala):** marfil `#F7F5F0`, carbón `#1A1C1E`, petróleo `#0E3A4A`, oliva `#5C6B4A`,
> humo `#8A8F94`. Tonos apagados, contraste suave, sombras profundas pero limpias.
>
> **Negativo (siempre):** sin texto/letras/marcas de agua, sin logos, sin flechas/gráficos que suban,
> sin símbolos de dinero volando, sin lujo ostentoso (Lamborghinis, fajos de billetes, mansiones),
> sin sonrisas de stock, sin saturación, sin HDR agresivo, sin deformaciones de manos/rostros,
> sin UI falsa ilegible. Nada que insinúe "ganancia garantizada".

**Compliance de movimiento (para los videos):** movimiento **lento y contenido** (deriva, respiración,
partículas de polvo en luz, paso de página, cursor sobrio sobre un portal). **Nunca** animar números
subiendo, barras creciendo, flechas al alza ni nada que sugiera rendimiento/ganancia. Loops de 6–10 s,
sin cortes bruscos, pensados para reproducirse en bucle perfecto detrás de texto (dejar zona "tranquila"
para el scrim/legibilidad).

---

## 1 · Loops de video para heroes (M1–M5)

Formato de entrega: **MP4 (H.264)** + **WebM (VP9)**, 1920×1080 (16:9), ~6–10 s, loop perfecto, **sin
audio**, ≤ 3–4 MB por archivo (se reproducen muteados, autoplay). Entregar también un **poster** (frame
key) como `.png`. Colocar en `public/img/<NN>/` y enchufar por `Hero` (abajo).

### V01 — Hero 01 Reserva (masterclass) · `01/01-hero-loop`
**Prompt:** "Cinematic slow push-in over a calm home workspace at dusk — a laptop showing a quiet county
auction portal (no readable UI), a notebook with a pen, a mug; warm low lamp light, deep charcoal
background, fine film grain, shallow depth of field. Subtle dust particles drifting in the light. Muted
petrol and ivory palette. Documentary, trustworthy, unhurried." · *Movimiento:* push-in lentísimo +
polvo. · *Zona tranquila:* izquierda (scrim left).

### V02 — Hero 03 Intensivo (sesión en vivo) · `03/03-hero-loop`
**Prompt:** "Two Latino mentors (a man and a woman, 40s, dark sober attire) working side by side at a
desk in a warm studio, reviewing printed property documents and a laptop; soft key light, charcoal
backdrop, film grain, cinematic shallow focus. Quiet, focused, collaborative. They gesture calmly while
explaining." · *Movimiento:* respiración de cámara muy leve + parpadeo natural; nada brusco. · *Nota:*
mantener identidad con foto real de los fundadores si se usa referencia.

### V03 — Hero 05 Mentoría (revisión 1:1) · `05/05-hero-loop`
**Prompt:** "Over-the-shoulder cinematic shot of a hand annotating a property checklist with a pen,
beside a laptop showing a muted map/parcel view (no readable text); warm desk lamp, deep charcoal
environment, dust motes in light beam, film grain, very shallow depth of field. Calm, precise,
high-trust." · *Movimiento:* la mano anota lento; foco respira. · *Zona tranquila:* derecha.

### V04 — Hero 07 Autoridad (retrato dúo) · `07/07-hero-loop`
**Prompt:** "Cinematic editorial portrait of two Latino founders standing in a dim studio, charcoal
seamless backdrop, single soft key light from the side, film grain, subtle rim light; they hold a still,
confident, serene pose and breathe naturally. Documentary editorial, premium, restrained." ·
*Movimiento:* casi inmóvil (la quietud transmite autoridad), solo respiración + grano vivo.

### V05 — Hero 09 Comunidad (pertenencia) · `09/09-hero-loop`
**Prompt:** "Warm, intimate scene suggesting belonging without faces in focus — soft bokeh of a small
online community call on a laptop at night, a cup of coffee, plants, warm lamp; charcoal room, film
grain, gentle slow drift. Calm, human, sober (no hype)." · *Movimiento:* deriva lenta + bokeh que
respira.

---

## 2 · Stills atmosféricos / texturas (opcional, refuerzan profundidad)

- **T01 — Grano/luz petróleo** `backgrounds/atmosphere-petrol-16x9.png`: "Abstract dark petrol-blue
  atmospheric gradient with soft light leak from one corner, heavy film grain, no objects. Subtle,
  cinematic, for use behind text." (Ratio 16:9.) *Refuerza el `AuroraField` con una base estática.*
- **T02 — Polvo en luz** `backgrounds/dust-light-16x9.png`: "Macro of dust particles floating in a soft
  beam of warm light against deep charcoal, very shallow focus, film grain." (Overlay sutil, opacidad baja.)
- **T03 — Mapa parcelario tenue** `backgrounds/parcel-map-muted-16x9.png`: "Top-down muted county parcel
  map abstraction, no text/numbers, faint petrol lines on charcoal, like a quiet ledger; documentary,
  not techy." (Fondo de secciones de método.)

---

## 3 · Retratos reales de fundadores (sustituir placeholders IA)

Sigue el enfoque híbrido ya acordado: **fotos de estudio reales** para retratos 1:1 de autoridad
(07: Argenis, Carmen) y para el hero dúo; usar **referencia de identidad** ("keep the same person") si
se generan variaciones. Editar al ratio del slot, gradar a la paleta y comprimir. Reemplazan a los
`*-gen-v1/v2` actuales en `public/img/07/` y `public/img/01/`.

---

## Cómo enchufar los videos (sin tocar más código)

1. Coloca `01-hero-loop.mp4` y `01-hero-loop.webm` (+ su poster ya existe) en `public/img/01/`.
2. En la landing, pasa la prop `video` (y opcional `webm`) dentro del objeto `image` del `Hero`:

   ```tsx
   <Hero
     tone="charcoal"
     image={{
       src: img('01', 'hero-fundadores-trabajando--16x9'), // poster actual (fallback)
       video: '/img/01/01-hero-loop.mp4',
       webm:  '/img/01/01-hero-loop.webm',
       alt: 'Sesión de trabajo en el portal de subastas',
       scrim: 'left',
     }}
   >
   ```

3. Listo. `VideoBackground` reproduce el loop en desktop y **cae al poster** en móvil / `reduced-motion`
   / si el archivo falla (degradación segura ya implementada). No hay que tocar nada más.
