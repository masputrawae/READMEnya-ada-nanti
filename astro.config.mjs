// @ts-check
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'
import remarkCallout from '@r4ai/remark-callout'
import brainDbAstro, { generateSlug } from '@braindb/astro'

// https://astro.build/config
export default defineConfig({
	site: 'https://masputrawae.github.io',
	base: '/',
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
		icon()
	],
	vite: {
		plugins: [tailwindcss()]
	},
	markdown: {
		remarkPlugins: [remarkCallout]
	}
})
