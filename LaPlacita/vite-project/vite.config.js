import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Importar el módulo path
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Usa el path correcto si tu archivo está en otra ubicación
      },
    },
  },
  base: '/PreEntrega1-Aleman-Reactjs-master/', // Ajusta esta ruta según tu estructura de GitHub Pages
})
