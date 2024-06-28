/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    /* use globals automatically import test functions */
    globals: true,
  },
})
