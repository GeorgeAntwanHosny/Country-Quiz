/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      color_1_grident:'#E65895',
      color_2_grident:'#BC6BE8',
      color_2:'#393F6E',
      color_3:'#E2E4F3',
      color_4:'#343964',
      color_5:'#3E9FFF',
      color_6:'#DD524C',
      color_7:'#8B8EAB',
      color_8:'#FFECC8',
    },
    fontFamily: {
      sans: ['Be Vietnam Pro', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

