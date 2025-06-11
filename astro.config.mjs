// @ts-check
import { defineConfig } from 'astro/config'

import icon from 'astro-icon'

import tailwindcss from '@tailwindcss/vite'
import rehypeRewrite from 'rehype-rewrite'

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  markdown: {
    rehypePlugins: [
      [
        rehypeRewrite,
        {
          rewrite: node => {
            if (node.tagName === 'a' && node.properties?.href) {
              const href = node.properties.href

              // Deteksi pola seperti blog-1, note-2, project-3, dsb
              const match = href.match(/^([a-z]+)-([\w-]+)$/)
              if (match) {
                const folder = match[1] // contoh: 'blog'
                const slug = match[0] // contoh: 'blog-1'
                node.properties.href = `/${folder}/${slug}`
              }
            }
          },
        },
      ],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
