import { Resvg } from '@resvg/resvg-js'
import fs from 'fs'
import path from 'path'
import satori from 'satori'
import { promisify } from 'util'

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
import type { AstroIntegration } from 'astro'

import { extractSlug, templates } from '../og-templates/templates'
import InterRegular from '../og-templates/fonts/Inter-Regular.ttf'
import CalSans from '../og-templates/fonts/CalSans-SemiBold.ttf'

export const generateOG = (): AstroIntegration => {
  let site: string
  return {
    name: 'astro-generate-og',
    hooks: {
      'astro:config:done': ({ config }) => {
        site = config.site ?? 'localhost:3000'
      },
      'astro:build:done': async ({ routes, pages }) => {
        const interFont = await readFile(path.join(process.cwd(), InterRegular))
        const calSansFont = await readFile(path.join(process.cwd(), CalSans))

        await Promise.all(
          pages.map(async (page) => {
            const route = routes.find((route) =>
              route.pattern.test(`/${page.pathname}`),
            )

            if (!route) return

            const segments: Record<string, string> = {}
            const matches = route.pattern.exec(`/${page.pathname}`)
            route.segments.flat().forEach((segment, index) => {
              if (!segment.dynamic) {
                segments[segment.content] = segment.content
              } else {
                const match = matches?.[index]
                if (match) {
                  segments[segment.content] = match
                }
              }
            })

            const ogSlug = extractSlug(route.route, segments)

            return await generateImage(
              site,
              route.route,
              page.pathname,
              ogSlug,
              interFont,
              calSansFont,
            )
          }),
        )
      },
    },
  }
}

export const generateImage = async (
  site: string,
  route: string,
  page: string,
  ogSlug: string,
  interFont: Buffer,
  calSansFont: Buffer,
) => {
  const templateFn = templates(route)

  if (!templateFn) {
    throw new Error('Not Found')
  }

  const data = { page: `/${page}`, url: site }

  const svg = await satori(templateFn(data), {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        data: interFont,
        style: 'normal',
      },
      {
        name: 'CalSans',
        data: calSansFont,
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

  await writeFile(
    path.join(process.cwd(), 'dist', `og-${ogSlug}.png`),
    image.asPng(),
  )

  return image.asPng()
}
