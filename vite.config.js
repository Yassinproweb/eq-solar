import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        company: resolve(__dirname, 'company.html'),
        quote: resolve(__dirname, 'quote.html'),
        thanks: resolve(__dirname, 'thanks.html'),
      },
    },
  },
})
