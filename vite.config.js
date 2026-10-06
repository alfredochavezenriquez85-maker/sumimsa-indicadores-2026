import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: https://londonconsultingmx.github.io/sumimsa-indicadores-2026/
export default defineConfig({
  plugins: [react()],
  base: '/sumimsa-indicadores-2026/',
})
