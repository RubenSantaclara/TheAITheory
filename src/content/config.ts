import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    tag: z.string(),
    excerpt: z.string(),
    author: z.string().default('The AI Theory'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    canonical: z.string().url().optional(),
    noindex: z.boolean().default(false),
    published: z.boolean().default(false),
  }),
});

export const collections = { posts };
