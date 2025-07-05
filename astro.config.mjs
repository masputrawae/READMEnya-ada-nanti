// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://masputrawae.github.io',
  base: '/READMEnya-ada-nanti/',
  redirects: {
    '/READMEnya-ada-nanti/':'/home/'
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), icon()]
});