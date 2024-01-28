/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        veryDarkBlue: "hsl(243, 87%, 12%)",
        desaturatedBlue: "hsl(238, 22%, 44%)",
        brightBlue: "hsl(224, 93%, 58%)",
        moderateCyan: "hsl(170, 45%, 43%)",
        lightGrayishBlue: "hsl(240, 75%, 98%)",
        lightGray: "hsl(0, 0%, 75%)",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "logo-svg": "url('../images/logo.svg')",
        "curve-desktop": "url('../images/bg-curve-desktop.svg')",
        "curve-mobile": "url('../images/bg-curve-mobile.svg')",
      }),
    },
  },
  plugins: [],
};
