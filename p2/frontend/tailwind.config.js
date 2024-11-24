const { black } = require('daisyui/src/theming/themes');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "red",
          secondary: "yellow",
        },
        black: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "rgb(290,15,20)",
          secondary: "orange",
        }
      }
    ]
  }
}

