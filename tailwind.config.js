/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Merriweather", "serif"],
        body: ["Roboto Slab", "serif"],
      },
      colors: {
        primary: "#cfa003",
      },
    },
  },
  plugins: [],
}
