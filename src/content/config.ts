import { defineCollection, reference, z } from 'astro:content'

export const authors = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      avatar: image().refine((img) => img.width >= 96, {
        message: 'Avatar must be at least 96px wide!',
      }),
      name: z.string(),
      username: z.string(),
      twitter: z.string().optional(),
      tags: z.array(z.string()),
    }),
})

const blog = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      publishDate: z.date(),
      updateDate: z.date(),
      image: z.string(),
      tags: z.array(z.string()),
      author: reference('authors'),
      excerpt: z.string(),
      canonicalUrl: z.string().optional(),
    }),
})

export const collections = {
  authors,
  blog,
}
