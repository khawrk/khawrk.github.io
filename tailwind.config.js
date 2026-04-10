/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      transparent: 'transparent',
      'dark-bg': '#0a0a0b',
      'orange-text': '#f97316',
      'gray-text': '#71717a',
      'default-text-color': '#fafafa'
    },
    extend: {
      backdropBlur: {
        md: '12px',
      },
    },
  },
  plugins: [],
}
