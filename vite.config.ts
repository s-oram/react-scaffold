import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { flatRoutes } from 'remix-flat-routes'
import wyw from '@wyw-in-js/vite'

export default defineConfig({
  plugins: [
    wyw({
      include: ['app/**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
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
