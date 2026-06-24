/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta exacta de marca (00-SISTEMA §5)
        ivory: '#F7F5F0',
        charcoal: '#1A1C1E',
        petrol: '#0E3A4A',
        olive: '#5C6B4A',
        smoke: '#8A8F94',
        // Apoyos derivados (sobrios)
        'ivory-dim': '#EAE7DF',
        'charcoal-soft': '#23262A',
        'petrol-bright': '#16566B',
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
        stage: '1200px',
        readable: '68ch',
      },
      boxShadow: {
        glass: '0 1px 2px rgba(26,28,30,0.04), 0 8px 30px rgba(26,28,30,0.06)',
        'glass-dark': '0 1px 2px rgba(0,0,0,0.2), 0 12px 40px rgba(0,0,0,0.35)',
        cta: '0 10px 30px -8px rgba(14,58,74,0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
}
