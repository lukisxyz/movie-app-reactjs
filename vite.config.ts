import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import biomePlugin from 'vite-plugin-biome'
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), biomePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
