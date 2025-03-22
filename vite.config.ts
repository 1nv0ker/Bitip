import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'node:path';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
    viteCompression({ algorithm: 'brotliCompress' }),
    viteImagemin({ gifsicle: { optimizationLevel: 7 } })
  ],
  server: {
    host: '0.0.0.0'
  },
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src')
  //   }
  // },
  build: {
    assetsInlineLimit: 4096, // 默认 4KB 以下文件转 Base64
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['ant-design-vue', 'axios', 'vue-router', 'bootstrap', 'echarts'],
        },
      },
    },
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true },
    },
  }
})
