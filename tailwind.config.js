/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      transparent: 'transparent',
      'dark-bg': '#141416',
      'orange-text': '#FA8F2C',
      'gray-text': '#7D8082',
      'default-text-color': '#EEF7FF'
    },
    extend: {},
  },
  plugins: [],
}

