/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#008FBE',
        'dark-primary': '#035F7D',
        secondary: '#570B52',
        accent: '#EAFAFF',
        'accent-purple': '#E6E9FF'
      },
      backgroundImage: {
        hero: "url('/web.webp')",
        'hero-blog': "url('/blog-bg.webp')"
      }
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    function ({ addComponents }) {
      addComponents({
        '.text-clamp-4': {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden'
        },
        '.hidden-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }]
}
