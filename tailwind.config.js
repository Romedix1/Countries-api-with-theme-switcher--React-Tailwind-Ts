/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": '2300px',
        "4xl": '3000px'
      },
      colors: {
        // Dark mode elements
        "DarkBlue": "#2b3945",
        // Dark mode background
        "VeryDarkBlue": "#202c37",
        // Light mode text
        "VeryDarkBlueLight": "#111517",
        // Light mode input
        "DarkGray": "#858585",
        // Light mode background
        "VeryLightGray": "#eaeaea",
        // Dark mode text and light mode elements
        "White": "#ffffff",
      },
    },
  },
  plugins: [],
}

