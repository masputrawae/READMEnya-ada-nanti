import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import { SIDEBAR_GROUPS } from "./sidebar.config.ts";
const groupIds = SIDEBAR_GROUPS.map(g => g.id) as [string, ...string[]];

const sidebarSchema = z.object({
  active: z.boolean(),
  group: z.enum(groupIds),
  order: z.number()
}).optional();

const docs = defineCollection({
  loader: glob({pattern: "**/*{.md,.mdx}", base: 'src/content/docs' }),
  schema: z.object({
    id: z.string().min(14).max(14),
    title: z.string(),
    created: z.coerce.date(),
  
    update: z.coerce.date().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    pinned: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),

    sidebar: sidebarSchema,
  })
})

export const collections = { docs }