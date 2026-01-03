/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      spacing: {
        70: "17.5rem",
        100: "25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
