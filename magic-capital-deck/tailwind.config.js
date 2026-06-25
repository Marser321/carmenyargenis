/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Pivote "oscuro-lujo" navy + dorado (paridad con el funnel). Los tokens
        // de marca se remapean en el ORIGEN: las slides oscuras (bg-charcoal) pasan
        // a navy; el texto oscuro (text-charcoal) a navy legible sobre ivory; los
        // acentos de slides claras (petrol) a navy, y los de slides oscuras (olive)
        // a DORADO. Así no hay que editar las 21 slides una a una.
        ivory: '#F7F5F0',
        charcoal: '#0A1426', // navy profundo (slides oscuras + texto oscuro)
        petrol: '#0F2036', // navy (acentos/CTA de slides claras)
        olive: '#C9A24B', // dorado (acentos de slides oscuras)
        smoke: '#8A8F94',
        // Apoyos derivados
        'ivory-dim': '#EAE7DF',
        'charcoal-soft': '#16293F', // navy-soft (tarjetas elevadas oscuras)
        'petrol-bright': '#1B3859', // navy elevado
        // Sistema oscuro-lujo explícito (para usar por nombre, igual que el funnel)
        midnight: '#0A1426',
        navy: '#0F2036',
        'navy-soft': '#16293F',
        'navy-line': '#24364E',
        gold: '#C9A24B',
        'gold-bright': '#E3C77A',
        'gold-deep': '#937234',
      },
      fontFamily: {
        // Display editorial (serif Fraunces variable). Body en Inter.
        display: ['"Fraunces Variable"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        stage: '1280px',
      },
      boxShadow: {
        glass: '0 1px 2px rgba(26,28,30,0.04), 0 8px 30px rgba(26,28,30,0.06)',
        'glass-dark': '0 1px 2px rgba(0,0,0,0.2), 0 12px 40px rgba(0,0,0,0.35)',
        cta: '0 12px 30px -10px rgba(201,162,75,0.5)',
        'gold-ring': '0 0 0 1px rgba(201,162,75,0.35), 0 12px 40px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}
