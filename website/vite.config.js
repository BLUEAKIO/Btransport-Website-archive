import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
      include: '**/*.svg',
      exportAsDefault: true,
    }),
    createHtmlPlugin({
      minify: true,
      entry: '/src/main.tsx',
      template: 'index.html',
      inject: {
        data: {
          title: 'BTransport'
        }
      }
    }),
    // checker({
    //   typescript: {
    //     tsconfigPath: './tsconfig.json'
    //   }
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      'assets': path.resolve(__dirname, './public/assets/')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    strictPort: true,
    hmr: {
      overlay: true
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, './index.html')
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          antd: ['antd'],
          i18n: ['i18next', 'react-i18next']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['chunk-QLO5XXYM'],
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'antd',
      'i18next',
      'react-i18next'
    ]
  },
  define: {
    'process.env': process.env
  }
})
