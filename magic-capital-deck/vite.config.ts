import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Puerto flexible: respeta PORT (lo asigna el preview del harness); default 5173.
  server: { port: Number(process.env.PORT) || 5173, open: false },
})
