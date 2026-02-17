/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f97316',
          dark: '#ea580c',
          light: '#fb923c'
        },
        dark: {
          DEFAULT: '#1e3a5f',
          light: '#2d4a6c',
          deep: '#0f2744'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
