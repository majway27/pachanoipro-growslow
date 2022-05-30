import { VitePWA } from 'vite-plugin-pwa'
import copy from 'rollup-plugin-copy'

export default {
  build: {
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      external: [
        "/sw.js",
      ],
    },
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      base: './',
      manifest: {
        "$schema": "https://json.schemastore.org/web-manifest-combined.json",
        "name": "HackerWeb",
        "short_name": "HackerWeb",
        "start_url": ".",
        "display": "standalone",
        "background_color": "#fff",
        "description": "A readable Hacker News app.",
        "icons": [{
          "src": "android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        }, {
          "src": "favicon-32x32.png",
          "sizes": "32x32",
          "type": "image/png"
        }],
      },
      workbox: {
      // workbox options for generateSW
        swDest: './dist/sw.js',
        globDirectory: './dist',
        skipWaiting: true
      }
    }),
    copy({
      targets: [{ src: './static/*', dest: './dist' }],
      verbose: true,
      hook: 'writeBundle',
      copyOnce: true
    }),
  ]
}
