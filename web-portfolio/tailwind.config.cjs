/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      spacing: {
        70: "17.5rem",
        100: "25rem",
      },
      // Slows down horizontal scrolling animation to reduce GPU load and prevent WebGL crashes
      // animation:{
      //   'scroll-left': 'scroll-left 40s linear infinite',
      // },
      // keyframes: {
      //   'scroll-left':{
      //     '0%': {transform: 'translateX(0)'},
      //     '100%': { transform: 'translateX(-50%)' },
      //   }
      // }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
