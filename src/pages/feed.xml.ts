import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'
import MarkdownIt from 'markdown-it'

const parser = new MarkdownIt({ html: true })

export async function get(context: APIContext) {
  const blog = await getCollection('blog')

  return rss({
    title: 'creatures.dev',
    description: 'creatures.dev - a community of developers excited about code',
    site: context.site?.toString() || 'https://creatures.dev',
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.publishDate,
      link: `/blog/${post.slug}`,
      content: parser.render(post.body),
    })),
  })
}
