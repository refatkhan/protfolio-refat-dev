/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // dark background
        secondary: "#1e293b", // dark mobile menu bg
        accent: "#22d3ee", // cyan highlight
        lightBg: "#ffffff", // light theme bg
        lightText: "#1f2937", // gray-800 for light theme
      },
    },
  },
  plugins: [],
};
