/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Your light mode color palette
        lightBg: 'rgb(243 244 246)',
        lightBgSecondary: 'hsl(0, 0%, 100%)',
        lightText: 'hsl(200, 15%, 8%)',

        // Your dark mode color palette
        darkBg: 'hsl(207, 26%, 17%)',
        darkBgSecondary: 'hsl(209, 23%, 22%)',
        darkText: 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}

