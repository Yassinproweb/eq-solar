/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./public/*.html",
    "./src/*.{js,html}",
  ],
  theme: {
    extend: {
      colors: {
        d: '#00291B',
        g: '#00796B',
        y: '#C7D971',
        w: '#FDFFFE'
      },
      padding: {
        pw: '5vw',
        py: '3.5rem',
        ph: '0.875rem',
      }
    },
  },
  plugins: [],
}

