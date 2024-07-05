
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  optimizeDeps: {
    include: [
      'firebase/app',
      'firebase/auth',
      'firebase/firestore',
      'firebase/storage',
    ],
  },
  build: {
    rollupOptions: {
      external: ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/storage','emoji-picker-react',
        'react-toastify','zustand','react-toastify/dist/ReactToastify.css',],
    },
  },
});
