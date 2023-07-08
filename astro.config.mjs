import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from "@astrojs/sitemap";
import netlify from '@astrojs/netlify/functions'

// https://astro.build/config
export default defineConfig({
  site: 'https://creatures.dev',
  integrations: [tailwind(), sitemap()],
  output: 'server',
  adapter: netlify({
    mode: 'hybrid'
  }),
  vite: {
    plugins: [rawFonts(['.ttf'])],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  }
});
export function rawFonts(ext) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_, id) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null
        };
      }
    }
  };
}
