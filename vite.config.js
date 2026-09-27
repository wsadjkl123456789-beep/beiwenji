import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const isStaticDeploy = process.env.DEPLOY_TARGET === 'static'

export default defineConfig({
  plugins: [vue()],
  base: isStaticDeploy ? '/' : '/static/',
  build: {
    outDir: isStaticDeploy
      ? resolve(import.meta.dirname, 'dist')
      : resolve(import.meta.dirname, '../website/static/frontend'),
    emptyOutDir: true,
    manifest: !isStaticDeploy,
    rollupOptions: {
      input: isStaticDeploy
        ? resolve(import.meta.dirname, 'index.html')
        : resolve(import.meta.dirname, 'src/main.js'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    proxy: {
      '/admin': 'http://127.0.0.1:8000',
      '/api': 'http://127.0.0.1:8000',
      '/static': 'http://127.0.0.1:8000',
    },
  },
})
