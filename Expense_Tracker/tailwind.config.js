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
        linen:"#f7f7f7",
        lightGreen: "#2ecc71",
        lightRed: "#c0392b",
        lightGray: "#dedede"
      }
    },
  },
  plugins: [],
}