import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      external: ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/storage'],
    },
  },
});
