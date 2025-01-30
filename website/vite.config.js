import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import i18n from 'vite-plughin-i18n'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['chunk-QLO5XXYM']
  }
})
