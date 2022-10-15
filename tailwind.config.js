/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'charm':['Charm', 'cursive'],
        'railway':['Railway','sans-serif']
      }
    },
  },
  plugins: [],
}
