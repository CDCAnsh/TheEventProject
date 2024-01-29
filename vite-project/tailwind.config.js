/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'custom' : '1410px',
        'custom2':'1100px',
        'ri' : '300px'
      },
      colors: {
        customColor: '#8800ff',
        side:'#e7ccff',
        button:"#ac4dff"
      },
      backgroundColor: ['active', 'hover'],
    },
  },
  plugins: [],
}

