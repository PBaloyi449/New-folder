// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // Adjust this to the correct directory if needed
  build: {
    rollupOptions: {
      input: 'src/main.js', // Adjust this to the correct entry point if needed
    },
  },
});
