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
        d: '#263238',
        g: '#00796B',
        y: '#F4D35E',
        f: '#E0F2F1',
        w: '#F0FFF1',
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

