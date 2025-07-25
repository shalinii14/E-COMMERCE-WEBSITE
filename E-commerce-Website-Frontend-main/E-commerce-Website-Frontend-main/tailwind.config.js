/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        'navColor' : "rgb(248, 129, 165)"
      },
      backgroundColor:{
        "cardBgColor" : "#FAF8F9",
        "CardAddCartBtn" : "#A0959B"
      }
    },
  },
  plugins: [
    require('daisyui','@tailwindcss/forms'),
  ],
}