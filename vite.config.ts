import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://paolopulvirenti.github.io/calcolo-spese-coppia/', 
  plugins: [react()],
})
