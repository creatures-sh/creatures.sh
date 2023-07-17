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
    }),
})

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      publishDate: z.date(),
      image: image().refine((img) => img.width >= 440, {
        message: 'Featured image must be at least 440px wide!',
      }),
      tags: z.array(z.string()),
      author: reference('authors'),
    }),
})

export const collections = {
  authors,
  blog,
}
