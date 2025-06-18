// @ts-check
import { defineConfig } from 'astro/config'

import { brainDbAstro, generateSlug } from '@braindb/astro'

import sitemap from '@astrojs/sitemap'

import icon from 'astro-icon'

import tailwindcss from '@tailwindcss/vite'

import mdx from '@astrojs/mdx'

import react from '@astrojs/react'

export default defineConfig({
	image: {
		experimentalLayout: 'constrained'
	},
	experimental: {
		responsiveImages: true
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
	}
})
