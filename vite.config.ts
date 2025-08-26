import { defineConfig } from 'vite';
import path from 'path'
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app/'),
      '@entities': path.resolve(__dirname, './src/entities/'),
      '@features': path.resolve(__dirname, './src/features/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@shared': path.resolve(__dirname, './src/shared/'),
      '@store': path.resolve(__dirname, './src/store/'),
      '@widgets': path.resolve(__dirname, './src/widgets/'),
    }
  }
});
