// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import remarkWikiLink from "@braindb/remark-wiki-link";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()],

  markdown: {
    remarkPlugins: [
      [
        remarkWikiLink,
        {
          // Konversi [[Page Name]] jadi tautan ke /notes/page-name
          linkTemplate: ({ slug, alias }) => ({
            hName: "a",
            hProperties: {
              href: `/blog/${slug.toLowerCase()}`,
              class: "wikilink"
            },
            hChildren: [{ type: "text", value: alias || slug }]
          }),
        }
      ]
    ],
  },
});