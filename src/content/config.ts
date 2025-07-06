import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

import { SIDEBAR } from '../sidebar.config'
const sideLabel = SIDEBAR.map(id => id.label) as [string, ...string[]]

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/docs' }),
  schema: z.object({
    // NEEDED
    id: z.string().min(14),
    title: z.string(),
    created: z.coerce.date(),

    // OPTIONAL SCHEMA
    update: z.coerce.date().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    pinned: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    
    // OPTIONAL SCHEMA SIDEBAR
    sidebar: z
      .object({
        group: z.enum(sideLabel),
        order: z.number(),
      })
      .optional(),
  }),
})

export const collections = {docs}