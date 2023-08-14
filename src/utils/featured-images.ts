import type { ImageMetadata } from 'astro'

const imagesImport = import.meta.glob('../assets/blog/*.jpg', {
  eager: true,
  import: 'default',
})

export const featuredImages: Record<string, ImageMetadata> = {}

for (const path in imagesImport) {
  const name = path.split('/').pop() ?? ''
  console.log(name)
  featuredImages[name] = imagesImport[path] as ImageMetadata
}

console.log('DONE')
console.log(featuredImages)
