import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      lib: resolve('src/lib'),
      pages: resolve('src/pages'),
      auth: resolve('src/modules/auth'),
      todo: resolve('src/modules/todo'),
    },
  },
  test: {
    globals: true,
    includeSource: ['src/**/*.{js,ts}'],
  },
})
