// @ts-check
import { defineConfig } from 'astro/config'

import { brainDbAstro, generateSlug } from '@braindb/astro'

import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import icon from 'astro-icon'
import netlify from '@astrojs/netlify'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import pagefind from 'astro-pagefind'

import remarkObsidianCallout from 'remark-obsidian-callout'

// https://astro.build/config
export default defineConfig({
	site: 'https://gas-jalan.netlify.app',
	image: {
		domains: ['astro.build'],
		remotePatterns: [{ protocol: 'https' }]
	},
	markdown: {
		// @ts-ignore
		remarkPlugins: [[remarkObsidianCallout, { titleTextTagName: 'strong', iconTagName: 'strong' }]]
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
		react(),
		pagefind()
	],
	vite: {
		plugins: [tailwindcss()]
	},
	adapter: netlify()
})
