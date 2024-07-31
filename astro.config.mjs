import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  // site: 'https://d2b.cl',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
})
