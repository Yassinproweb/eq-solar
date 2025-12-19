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
        g: '#358105',
        y: '#ffbd00',
        b: '#000000',
        w: '#ffffff'
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

