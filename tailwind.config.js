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
        d: '#162822',
        g: '#00796B',
        y: '#F4D35E',
        f: '#F7E991',
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

