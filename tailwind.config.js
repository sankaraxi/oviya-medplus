/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'], // Add Oswald as a font family
      },
      colors: {
        heading: '#0D868F', // Your custom color with a name
      },
    },
  },
  plugins: [],
}

