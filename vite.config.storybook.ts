import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { linariaConfig } from './vite.config.base'

export default defineConfig({
  plugins: [linariaConfig(), tsconfigPaths()],
})
