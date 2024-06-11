/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Ajout explicite du mode JIT
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
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
        transitionBlue: '#5694BD'
      },
      boxShadow: {
        'itemShadow': '0px 4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
