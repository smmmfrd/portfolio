/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blurredBg': 'rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}
