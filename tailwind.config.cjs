/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        primary:"Bebas Neue"
      },
      colors:{
        
      },
      backgroundImage: {
        golden: 'linear-gradient(to right,#906126, #F3C851, #F0D27F,#A87C2D)',
      },
    },
  },
  plugins: [],
}