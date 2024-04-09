/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '700px',

      'laptop': '1024px',

      'desktop': '1280px',
      'large-screen':'1536px'
    },
    

    extend: {
      colors:{
        "primary":"#2F667F",
        "secondary":"#539BBB",
        "tertiary":"#F9F9F9"
      },
      boxShadow: {
        '3xl': '10px 10px 30px 2px rgba(0, 0, 0, 0.4)',
        '1xl': '6px 6px 10px 0.1px rgba(0, 0, 0, 0.1)',
      }


    },
  },
  plugins: [],
}