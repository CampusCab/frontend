import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: './assets',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  base: '/frontend/'
})
