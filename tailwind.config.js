/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./registeredDetails.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue: '#265073',
        midBlue: '#2D9596',
        lightMidBlue: '#9AD0C2',
        lightGrey: '#F1FADA',
      }
    },
  },
  plugins: [],
}

