/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '9xl': '17rem'
    },
    fontFamily: {
      'mono': ['Roboto Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}