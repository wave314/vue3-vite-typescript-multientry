import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  root: './src/pages/',
  base: '/wave/',
  publicDir: '../../public',
  build: {
    outDir: '../../dist/wave',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/main/index.html'),
        page: resolve(__dirname, 'src/pages/page/index.html')
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    // 开发服务器配置
    port: 8888, // 端口默认3000,
    open: '/wave/main/'
  }
})
