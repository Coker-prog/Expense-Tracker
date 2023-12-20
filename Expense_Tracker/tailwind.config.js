/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        floralWhite: "#FFFDDO",
        linen:"#FAF0E6"
      }
    },
  },
  plugins: [],
}