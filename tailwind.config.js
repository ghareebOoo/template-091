/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home': "url('/src/imgs/desktop/image-hero.jpg')",
        'mobile': "url('/src/imgs/mobile/image-hero.jpg')",
      }
    },
  },
  plugins: [],
}
