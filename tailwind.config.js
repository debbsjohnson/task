/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Axiforma',
        secondary: 'Poppins',
      },
      extend: {
         colors: {
           primary: "#0E121E",
           secondary: "#242424",
           tetiary: "#EECA66",
         }
      }
    },
  },
  plugins: [],
}

