/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'montserrat': ['Montserrat'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: {
        light: "#DDDBD7",
        dark: "#B1B3B0",
      },
      green:{
        dark: "#0A5247",
        light:"#BFD202",
      },
      purple: colors.violet,
      yellow: colors.amber,
      red: colors.red,
      lime: colors.lime
    },
    extend: {},  
  },
  plugins: [],
}