/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#2B247C',
        'secondary': '#C20909',
        'primary-light': '#B8A169',
        'darkbrown': '#4A412A',
        'yellow': '#FFE091',
        'background': '#E6E3EC'
      }
    },
  },
  plugins: [],
}

