// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config'
import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'
import remarkCallout from '@r4ai/remark-callout'
import brainDbAstro, { generateSlug } from '@braindb/astro'

import sitemap from '@astrojs/sitemap'
import pagefind from 'astro-pagefind'

// https://astro.build/config
export default defineConfig({
	site: 'https://masputrawae.github.io',
	base: '/READMEnya-ada-nanti/',
	trailingSlash: 'always',
	image: {
		domains: ['astro.build'],
		remotePatterns: [{ protocol: 'https' }],
		service: passthroughImageService()
	},
	integrations: [
		brainDbAstro({
			root: 'src/content/Vault',
			source: '/',
			remarkWikiLink: true,
			git: false,
			url: (filePath, frontmatter) => {
				const slug = frontmatter.slug ? String(frontmatter.slug) : generateSlug(filePath)
				const cleanSlug = slug.replace(/^\/+/, '')
				return `/${cleanSlug}/`
			}
		}),
		icon(),
		sitemap(),
		pagefind()
	],
	vite: {
		plugins: [tailwindcss()]
	},
	markdown: {
		remarkPlugins: [remarkCallout]
	}
})
