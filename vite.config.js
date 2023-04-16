import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/myapi': {
        target: 'https://api.ipify.org',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/myapi/, ''),
      },
    },
  },
});
