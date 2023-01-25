/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cprimary:{
          50:'#F8F9FA',
          100:'#E9ECEF',
          200:'#DEE2E6',
          300:'#CED4DA',
          400:'#ADB5BD',
          500:'#6C757D',
          600:'#495057',
          700:'#343A40',
          800:'#212529',
        },
        csecond:{
          100:"#14213D",
          200:"#FCA311",
          300:'#E5E5E5',
        },
      },
    },
  },
  plugins: [],
}
