// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://masputrawae.github.io',
  base: '/',
  image: {
    remotePatterns: [{ protocol: "https" }],
    domains: ["astro.build"],
    service: passthroughImageService(),
  },
  integrations: [icon(), mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});