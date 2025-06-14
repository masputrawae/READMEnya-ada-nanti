// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://masputrawae.github.io',
  base: '/',
  integrations: [icon(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});