/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './src/**/**/*.tsx',
    'index.html',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        zinc: {
          50: '#fafafa',
        },
        gray: {
          300: '#d1d5db',
          700: '#374151',
          800: '#1f2937',
        },
        red: {
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        blue: {
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
        },
      },
      backgroundImage: {
        gradient: 'linear-gradient(to bottom, #DFE7ED 0%, #DFE7ED 100%)',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin'), require('@tailwindcss/forms')],
}
