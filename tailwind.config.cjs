/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'l33t': '5px 5px 0px 0px #43ff64'
      }
    },
  },
  plugins: [],
}
