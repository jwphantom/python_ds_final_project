/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E173C",
        "light-primary": "#932A8E",
        secondary: "#F2E7F2",
        "dark-primary": "#3B4C0E",
        "anti-white": "#FEFEFE",
        "gray-block": "#F2ECE4",
        "gray-text": "#99A5B4",
      },
      fontFamily: {
        Josefin: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        Lavishly: ["Lavishly Yours", ...defaultTheme.fontFamily.sans],
        Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
