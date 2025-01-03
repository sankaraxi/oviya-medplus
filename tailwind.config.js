/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'], 
      },
      colors: {
        heading: '#0D868F',
        gradientfrom: '#17BE81',
        gradientto: '#09BBCC',
        plus:'#20BAD1'
      },
    },
  },
  plugins: [],
}

