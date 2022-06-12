/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      Blue800: "#1C1C65",
      Blue900: "#0F103F",
      white: "#ffffff",
      black: "#000000",
      Purple: "#A19DCA",
      transparent: "transparent"
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px'
    },
    extend: {},
  },
  plugins: [],
};
