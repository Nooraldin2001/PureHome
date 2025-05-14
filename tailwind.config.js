/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff914d', // Orange (replacing the green)
        'secondary': '#ffffff', // White
        'tertiary': '#d9d9d9', // Light Gray
        'dark-blue': '#0f2a43', // For backgrounds like mortgage calculator
        'text-dark': '#333333',
        'text-light': '#686868',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 