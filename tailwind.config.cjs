/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        steam: {
          "0%, 100%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "100% " },
        },
      },
    },
  },
  plugins: [],
};
