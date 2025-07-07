// @ts-check
import { defineConfig } from 'astro/config'
import { brainDbAstro } from '@braindb/astro'

import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'
import pagefind from 'astro-pagefind'

// https://astro.build/config
export default defineConfig({
	site: 'https://gasjalan.netlify.app',
	base: '/',
	output: 'static',
	devToolbar: { enabled: false },
	integrations: [icon(), brainDbAstro()],
	vite: {
		plugins: [tailwindcss(), pagefind()]
	}
})
