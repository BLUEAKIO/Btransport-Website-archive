import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './', 
  publicDir: 'public',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  define: {
    'import.meta.env.BASE_URL': JSON.stringify('https://transport.blueakio.com'),
  },
});