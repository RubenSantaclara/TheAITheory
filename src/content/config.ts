import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title:     z.string(),
    date:      z.string(),
    tag:       z.string(),
    excerpt:   z.string(),
    published: z.boolean().default(false),
  }),
});

export const collections = { posts };
