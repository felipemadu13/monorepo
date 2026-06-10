import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MonorepoSuporte',
      fileName: () => 'index.js',
      formats: ['es']
    },
    rollupOptions: {
      // Vue deve ser externa para evitar múltiplas instâncias na aplicação final
      external: ['vue', 'vuetify', 'vuetify/components', 'vuetify/directives'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
