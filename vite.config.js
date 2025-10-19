import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@componentes': path.resolve(__dirname, 'src/componentes'),
      '@paginas': path.resolve(__dirname, 'src/paginas'),
      '@datos': path.resolve(__dirname, 'src/datos'),
      '@css': path.resolve(__dirname, 'src/source'),
    },
  },
})
