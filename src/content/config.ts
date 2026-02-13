import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const videos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    videoUrl: z.string(),
    duration: z.string(),
    pubDate: z.coerce.date(),
    thumbnail: z.string().optional(),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    type: z.string(),
    url: z.string().url(),
    image: z.string(),
    pubDate: z.coerce.date(),
  }),
});

const skills = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    externalPath: z.string(),
    category: z.string().optional(),
  }),
});

export const collections = { blog, videos, resources, skills };
