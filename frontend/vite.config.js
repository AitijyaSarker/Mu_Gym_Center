import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5182,        // 👈 force port
    strictPort: true,  // 👈 don’t auto-switch
  },
})
