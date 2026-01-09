import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' // <--- THIS LINE IS THE CULPRIT

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- AND THIS ONE
  ],
})