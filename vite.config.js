import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        // hrvatska naslovnica
        main: resolve(__dirname, 'index.html'),
        // engleska podstranica na /en/
        en: resolve(__dirname, 'en/index.html'),
      },
    },
  },
})
