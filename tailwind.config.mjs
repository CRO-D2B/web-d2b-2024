/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#008FBE',
        secondary: '#035F7D',
        'primary-purple': '#570B52',
        accent: '#D7F5FF',
        'accent-purple': '#E6E9FF'
      }
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    function ({ addComponents }) {
      addComponents({
        '.text-clamp-4': {
          display: '-webkit-box',
          '-webkit-line-clamp': '4',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden'
        },
        '.scroll-reveal-left': {
          animation: 'reveal-left linear both',
          'animation-timeline': 'view()',
          'animation-range': 'entry 20% cover 40%'
        },
        '@keyframes reveal-left': {
          from: {
            opacity: 0,
            translate: '-100px'
          },
          to: {
            opacity: 1,
            translate: 0
          }
        },

        '.scroll-reveal-right': {
          animation: 'reveal-right linear both',
          'animation-timeline': 'view()',
          'animation-range': 'entry 20% cover 40%'
        },
        '@keyframes reveal-right': {
          from: {
            opacity: 0,
            translate: '100px'
          },
          to: {
            opacity: 1,
            translate: 0
          }
        }
      })
    }]
}
