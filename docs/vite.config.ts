import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'remaster-lib': path.resolve(__dirname, '../dist/index.es.js'),
      '@phosphor-icons/react': path.resolve(
        __dirname,
        '../node_modules/@phosphor-icons/react/dist/index.cjs'
      ),
    },
  },
  plugins: [react()],
})
