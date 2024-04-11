import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node'

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  image: {
    domains: ['admin.d2b.cl']
  },
  adapter: node({
    mode: 'standalone'
  })
})
