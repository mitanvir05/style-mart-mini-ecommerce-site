/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
          "black":"#1E2832",
          "primary-bg":"#1e28320d",
          
      },
    },
  },
  plugins: [flowbite.plugin(),],
}

