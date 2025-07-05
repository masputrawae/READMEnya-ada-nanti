// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: 'https://masputrawae.github.io',
  base: '/',
  trailingSlash: 'always',
  cacheDir: './astro-cacheDir',
  build: {
    format: "directory",
    inlineStylesheets: "never",
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), icon(), pagefind()]
});