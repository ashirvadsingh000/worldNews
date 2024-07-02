/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['"Poppins"', '"sans-serif"'],
      Dancing: ['"Dancing Script"', '"cursive"'],
      Berkshire: ['"Berkshire Swash"', '"serif"'],
      whisper: ['"Whisper"', '"cursive"'],
      anta: ['"Anta"', '"sans-serif"'],
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      colors: {
        'home-blue': '#3275a8',
        'home-blue-light': '#97c6d1',
      },
  plugins: [],
    },
  },
}
