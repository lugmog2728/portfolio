/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BFEEFF',
        secondary: '#22577A',
        lightBlue: '#DBFDFF', 
        darkblue: '#1A4059',
        oceanblue: '#2FABBC', 
        lightGreen: '#38A3A5',
        lightPurple: '#a0A9F5', 
        orange: '#FFA800',
      }, 
      boxShadow: {
        'itemShadow': '0px 4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
