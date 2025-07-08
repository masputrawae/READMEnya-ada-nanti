// @ts-check
import { defineConfig } from 'astro/config'
import { brainDbAstro } from '@braindb/astro'

import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'
import pagefind from 'astro-pagefind'

// https://astro.build/config
export default defineConfig({
	site: 'https://masputrawae.github.io',
	base: '/READMEnya-ada-nanti/',
  trailingSlash: 'always',
  build: {format: 'directory'},
	integrations: [icon(), brainDbAstro()],
	vite: {
		plugins: [tailwindcss(), pagefind()]
	}
})
