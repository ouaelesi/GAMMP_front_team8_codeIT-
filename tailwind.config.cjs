/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {//note that i didn't add black and white use them directly as classes
        'success-dark': '#027A48',
        'success': '#32D583',
        'failed-dark': '#F04438',
        'failed': '#feeceb'
      },
      fontFamily: {
        'MainFont': ['Montserrat', 'sans-serif'],
        'SecondFont': ['Inter' ,'sans-serif']
      }
    }
  },
  plugins: [],
}