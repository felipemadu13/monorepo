import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vitest/config'
import viteConfig from '../../apps/hub/vite.config'
import baseVitestConfig from '../../apps/hub/vitest.config'

export default mergeConfig(baseVitestConfig, mergeConfig(viteConfig, {
  test: {
    root: fileURLToPath(new URL('./', import.meta.url)),
  },
}))