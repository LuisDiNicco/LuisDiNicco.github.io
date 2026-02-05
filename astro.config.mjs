// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon'; // <--- 1. IMPORTAR LA INTEGRACIÓN

// https://astro.build/config
export default defineConfig({
  site: 'https://LuisDiNicco.github.io',
  base: '/',
  
  integrations: [icon()], // <--- 2. REGISTRAR AQUÍ
  vite: {
    plugins: [tailwindcss()]
  }
});