/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './src/**/**/*.tsx', 'index.html'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(to bottom, #DFE7ED 0%, #DFE7ED 100%)',
      },
    },
  },
  plugins: [],
}
