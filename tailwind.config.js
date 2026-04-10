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
      'gray-text': '#a1a1aa',
      'default-text-color': '#fafafa'
    },
    backgroundImage: {
      'GithubNormal': 'url(/src/assets/github.png)',
      'GithubHover': 'url(/src/assets/githubHover.png)',
      "LinkedInNormal": 'url(/src/assets/linkedin.png)',
      "LinkedInHover": 'url(/src/assets/linkedinHover.png)',
      "mailNormal": 'url(/src/assets/mail.png)',
      "mailHover": 'url(/src/assets/mailHover.png)',
      "stars": 'url(/src/assets/stars.svg)',
      "lightMode": 'url(src/assets/LightMode.svg)',
      "darkMode": 'url(src/assets/DarkMode.svg)',
    },
    extend: {},
  },
  lightMode: 'class',
  plugins: [],
}

