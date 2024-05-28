import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // port: 4200, // must be a port other than 5173
    host: true,
    watch: {
      usePolling: true,
    },
  },
});
