import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import tailwindcss from '@tailwindcss/vite';
// import path from 'node:path';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';
// import viteImagemin from 'vite-plugin-imagemin';
import sitemap from 'vite-plugin-sitemap'
// const timestamp = new Date().getTime();
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // tailwindcss(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less', // css in js
          resolveIcons: true // 自动处理图标
        }),
      ],
      dts: true
    }),
    sitemap({
      hostname: 'https://www.bitip.com',
      dynamicRoutes:['/', '/home'],

      generateRobotsTxt: true,
    }),
    // viteCompression({ algorithm: 'brotliCompress' }),
    // viteCompression({
    //   algorithm: 'brotliCompress',  // 替换为 Brotli 算法[5,6](@ref)
    //   ext: '.br',                   // 文件后缀
    //   compressionOptions: {
    //     level: 11                   // 压缩级别（1-11，默认11）[5](@ref)
    //   }
    // }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      // filter:/\.(js|mjs|json|css|html|woff2)$/i,
      deleteOriginFile: false  // 保留原始文件[6](@ref)
    })
    // viteImagemin({ gifsicle: { optimizationLevel: 7 } })
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
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['ant-design-vue', 'axios', 'vue-router', 'bootstrap', 'echarts'],
        },
        // assetFileNames: 'assets/[name]-[hash].[ext]',  // 图片/字体等
        // chunkFileNames: `js/[name]-[hash].js`,        // 代码分割块
        // entryFileNames: `js/[name]-[hash].${timestamp}.js`
      },
    },
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true },
    },
  }
})
