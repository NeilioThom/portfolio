/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EE4A58',
        indigo: '#0e1a25',
        'indigo-dark': '#070e14',
      },
      fontFamily: {
        display: ['Roboto'],
      },
      fontSize: {
        base: '1em',
      },
      container: {
        padding: '2em',
      },
    },
  },
  plugins: [],
}
