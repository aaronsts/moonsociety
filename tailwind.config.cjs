/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
      colors: {
        'primary-100': '#F2F3F9',
        'primary-200': '#918CBA',
        'primary-300': '#4D468B',
        'primary-400': '#1F1E4A',
        'primary-500': '#0C0C13',
        'secondary-200': '#00C899',
        'secondary-300': '#00E0AC',
        'secondary-400': '#00B88D',
      },
    },
  },
  plugins: [],
};
