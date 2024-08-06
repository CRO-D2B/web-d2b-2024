import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  site: 'https://d2b.cl',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  redirects: {
    '/blog/analitica-web': { status: 301, destination: '/blog/categoria/analitica-web' },
    '/blog/marketing-digital': { status: 301, destination: '/blog/categoria/marketing-digital' },
    '/blog/cro': { status: 301, destination: '/blog/categoria/cro' },
    '/blog/posicionamiento-web': { status: 301, destination: '/blog/categoria/posicionamiento-web' },
    '/blog/trabaja-con-nosotros': { status: 301, destination: '/quienes-somos' }
  }
})
