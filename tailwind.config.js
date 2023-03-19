/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage:{
        'hand': "url('/src/resources/hand.png')",
        'about1' : "url('/src/resources/about1.jpg')",
        'about2' : "url('/src/resources/about2.jpg')",
      },
      fontFamily: {
       'Mont': ['Montserrat', 'sans-serif'],
        'Lora': ['Lora', 'serif'],
      },
      colors:{
        'violet':'#7E94F8',
        'lightVio' : '#9cacf1',
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
