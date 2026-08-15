import { defineCollection, z } from "astro:content";

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { news };
