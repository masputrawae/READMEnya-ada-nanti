import { defineCollection, z } from 'astro:content'
import { glob, file } from 'astro/loaders' // Not available with legacy API

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    date: z.date(z.string()).optional(),
    update: z.date(z.string()).optional(),
  }),
})

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    thumbnail: z.string().optional(),
    repo: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    status: z.enum(["Planning", "In Progress", "Completed", "On Hold"]).optional(),
    date: z.date(z.string()).optional(),
    update: z.date(z.string()).optional(),
  }),
})

export const collections = { blog, projects }
