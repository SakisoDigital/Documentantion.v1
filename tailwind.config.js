/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Montserrat', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
