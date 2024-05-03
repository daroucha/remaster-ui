import path from 'path'
import { defineConfig } from 'vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'react-jp-ui',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    libInjectCss(),
    svgr(),
    dts({ exclude: ['**/*.stories.tsx'] }),
  ],
})
