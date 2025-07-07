// @ts-check
import { defineConfig } from 'astro/config'
import { brainDbAstro } from '@braindb/astro'

import icon from 'astro-icon'

import tailwindcss from '@tailwindcss/vite'

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
	site: 'https://masputrawae.github.io',
	base: '/',
	output: 'server',
	devToolbar: { enabled: false },
	integrations: [icon(), brainDbAstro()],

	vite: {
		plugins: [tailwindcss()]
	},

	adapter: netlify()
})
