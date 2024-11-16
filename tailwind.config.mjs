/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: { background: "url('/public/main-robotcity.webp')" }
    },
    fontFamily: {
      footer: ['Sixtyfour Convergence', 'sans-serif']
    }
  },
  plugins: []
}
