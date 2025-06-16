import { defineCollection, z } from 'astro:content'
import { glob, file } from 'astro/loaders'

const docs = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
		thumbnail: z.string().optional(),
		tags: z.array(z.string()).optional(),
		date: z.coerce.date().optional(),
		update: z.coerce.date().optional(),
		featured: z.boolean().optional(),
	})
})

const projects = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
		title: z.string(),
		description: z.string(),
		thumbnail: z.string(),
		tags: z.array(z.string()).optional(),
		date: z.coerce.date().optional(),
		update: z.coerce.date().optional(),
		featured: z.boolean().optional(),
	})
})

export const collections = { docs, projects }
