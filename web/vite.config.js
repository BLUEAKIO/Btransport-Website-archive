import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './', // 设置基础路径为相对路径
  resolve: {
    alias: {
      '@': '/src', // 确保别名配置正确
    },
  },
});