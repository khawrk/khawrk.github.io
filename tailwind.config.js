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
    backgroundImage: {
      'GithubNormal': 'url(/src/assets/github.png)',
      'GithubHover': 'url(/src/assets/githubHover.png)',
      "LinkedInNormal": 'url(/src/assets/linkedin.png)',
      "LinkedInHover": 'url(/src/assets/linkedinHover.png)',
      "mailNormal": 'url(/src/assets/mail.png)',
      "mailHover": 'url(src/assets/mailHover.png)'
    },
    extend: {},
  },
  plugins: [],
}

