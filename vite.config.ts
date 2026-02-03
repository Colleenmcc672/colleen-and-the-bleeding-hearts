import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures the site works on any GitHub repo name
  build: {
    outDir: 'dist',
  }
});
