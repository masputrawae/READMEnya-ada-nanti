import { defineCollection, z } from 'astro:content'
import { glob, file } from 'astro/loaders'

const vaults = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/vaults' }),
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
		thumbnail: z.string().optional(),
		tags: z.array(z.string()).optional(),
		date: z.coerce.date().optional(),
		update: z.coerce.date().optional(),
		featured: z.boolean().optional(),
		type: z.enum(['Projects', 'Permanent', 'Notes']).optional()
	})
})

export const collections = { vaults }
