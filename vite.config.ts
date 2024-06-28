import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { flatRoutes } from 'remix-flat-routes'
import wyw from '@wyw-in-js/vite'

const linariaConfig = () =>
  wyw({
    include: ['app/**/*.{ts,tsx}'],
    babelOptions: {
      presets: ['@babel/preset-typescript', '@babel/preset-react'],
    },
  })

export default defineConfig({
  plugins: [
    linariaConfig(),
    remixCloudflareDevProxy(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      ignoredRouteFiles: ['**/*'],
      routes: async defineRoutes => flatRoutes('routes', defineRoutes),
    }),
    tsconfigPaths(),
  ],
})
