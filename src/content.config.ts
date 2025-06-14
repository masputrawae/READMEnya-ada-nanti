// content.config.ts
import { z, defineCollection } from 'astro:content'
import { glob, file } from 'astro/loaders' // Not available with legacy API

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()).optional(),
    date: z.coerce.date(),
    update: z.coerce.date().optional(),
  }),
})

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()).optional(),
    date: z.coerce.date(),
    update: z.coerce.date().optional(),
  }),
})

export const collections = { blogs, projects }
