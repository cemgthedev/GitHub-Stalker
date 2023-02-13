/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    fontFamily: {
      sans: 'Roboto'
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
