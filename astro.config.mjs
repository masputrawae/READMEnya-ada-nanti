// @ts-check
import { defineConfig } from 'astro/config'

import { brainDbAstro, generateSlug } from '@braindb/astro'

import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import icon from 'astro-icon'
import netlify from '@astrojs/netlify'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	site: 'https://www.example.com',
	image: {
		domains: ['astro.build'],
		remotePatterns: [{ protocol: 'https' }]
	},
	integrations: [
		brainDbAstro({
			root: 'src/content/vaults',
			source: '/',
			remarkWikiLink: true,
			git: false,
			url: (filePath, frontmatter) => {
				const slug = frontmatter.slug ? String(frontmatter.slug) : generateSlug(filePath)
				const cleanSlug = slug.replace(/^\/+/, '')
				return `/${cleanSlug}/`
			}
		}),
		sitemap(),
		icon(),
		mdx(),
		react()
	],
	vite: {
		plugins: [tailwindcss()]
	},
	adapter: netlify()
})
