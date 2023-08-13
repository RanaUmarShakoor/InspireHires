/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "max-height",
      },
    },
    screens: {
      xxs: "350px",
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
