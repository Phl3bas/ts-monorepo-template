import { defineConfig } from 'vite'
import { alias } from './alias'

export default defineConfig({
  optimizeDeps: {
    entries: [],
  },
  resolve: {
    alias,
  },
})
