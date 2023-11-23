/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm : '480px',
      md : '768px',
      lg : '796px',
      xl : '1440px'
    },
    extend: {
      colors: {
        stringCyan: ' sl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        graishBlue: 'hsl(210, 11%, 66%)',
      },
      fontFamily: {
        sans: ['Nunito', 'san-serif']
      }
    },
  },
  plugins: [],
}

