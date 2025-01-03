/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        heading: '#0D868F',
        gradientfrom: '#17BE81',
        gradientto: '#09BBCC',
        plus:'#20BAD1',
        dropdown: '#F9F9F9',
      },
    },
  },
  plugins: [],
}

