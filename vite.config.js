import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Tweeter-2.0-Project/' ,
  plugins: [react()],
   // <-- זה מה שחשוב
})