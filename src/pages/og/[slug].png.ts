import { Resvg } from '@resvg/resvg-js'
import type { APIRoute } from 'astro'
import satori from 'satori'

import { templates } from '@/og-templates/templates'
import InterRegular from '@/og-templates/fonts/Inter-Regular.ttf'
import CalSans from '@/og-templates/fonts/CalSans-SemiBold.ttf'

export const prerender = false

// inspired by TheOtterlord: https://github.com/TheOtterlord/astro-opengraph
export const GET: APIRoute = async ({ params, request }) => {
  const { slug } = params
  const { origin } = new URL(request.url)

  if (!slug) {
    throw new Error('Bad Request')
  }

  const templateFn = templates[slug]

  if (!templateFn) {
    throw new Error('Not Found')
  }

  const { searchParams } = new URL(request.url)
  const data = Object.fromEntries(searchParams.entries())
  data.url = origin

  const svg = await satori(templateFn(data), {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        data: Buffer.from(InterRegular),
        style: 'normal',
      },
      {
        name: 'CalSans',
        data: Buffer.from(CalSans),
        style: 'normal',
      },
    ],
  })

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  })

  const image = resvg.render()

  return new Response(image.asPng(), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
