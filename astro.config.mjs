import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: import.meta.env.BASE_URL,
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
})
