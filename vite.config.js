import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Tweeter-2.0-Project/'  // <-- זה מה שחשוב
})