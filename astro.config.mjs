// @ts-check
import { defineConfig } from 'astro/config'
import { imageService } from "@unpic/astro/service";
import { brainDbAstro, getBrainDb } from '@braindb/astro'

import remarkWikiLink from '@braindb/remark-wiki-link'
import netlify from '@astrojs/netlify'

import sitemap from '@astrojs/sitemap'

import react from '@astrojs/react'

import mdx from '@astrojs/mdx'

import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

const bdb = getBrainDb()
await bdb.ready()

// https://astro.build/config
export default defineConfig({
	site: 'https://masputrawae.github.io',
	adapter: netlify(),
	image: {
		domains: ['astro.build'],
		remotePatterns: [{ protocol: 'https' }],
		service: imageService({
      placeholder: "blurhash",
      layout: "constrained",
    })
	},
	integrations: [brainDbAstro({ remarkWikiLink: true }), sitemap(), react(), mdx(), icon()],
	markdown: { remarkPlugins: [remarkWikiLink] },

	vite: {
		plugins: [tailwindcss()]
	}
})
