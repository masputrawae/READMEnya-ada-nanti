// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), icon()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});