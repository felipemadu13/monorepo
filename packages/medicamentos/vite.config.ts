import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MonorepoMedicamentos',
      fileName: () => 'index.js',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', 'vuetify', 'vuetify/components', 'vuetify/directives'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
