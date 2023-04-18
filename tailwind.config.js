/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Axiforma',
        secondary: 'Pally',
      },
      // container: {
      //   padding: {
      //     DEFAULT: "1rem",
      //     lg: '0',
      //   },
      // },
      screens: {
        sm: "450px",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
      }, 
      extend: {
         colors: {
           primary: "#474545",
           secondary: "#ffff",
           tetiary: "#8028FF",
           accent: {
             primary: "#9C69E2",
             primary_hover: "#90559DB",
             secondary: "#F063B8",
             secondary_hover: "#E350A9",
             tetiary:"#68C9BA",
           }
         }
      }
    },
  },
  plugins: [],
}

