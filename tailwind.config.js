/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EE4A58",
      },
      fontFamily: {
        display: ["Roboto"],
      },
    },
  },
  plugins: [],
};