import { defineConfig } from 'vite'
import reactSWC from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [reactSWC()],
  base: "/THE-WAY-OF-VICTORY-INTERNATIONAL-BIBLE-COLLEGE-MINSTRY/",
  build: {
    rollupOptions: {
      input: './src/main.jsx' // Add this line to specify your entry point
    }
  }
})
