// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config'

import react from '@astrojs/react'

import mdx from '@astrojs/mdx'

import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	integrations: [react(), mdx(), icon()],
	image: {
		domains: ['astro.build'],
		remotePatterns: [{ protocol: 'https' }],
		service: passthroughImageService()
	},
	vite: {
		plugins: [tailwindcss()]
	}
})
