/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
        'abu':'#474747',
        'textputih':'#F9F9F7',
        'hitam':"#2C2F24",
        'paraf':'#414536',
        'merah':'#AD343E'
      },
      fontFamily:{
        'dmsans':["DM Sans", "sans-serif"],
        'playfair':["Playfair Display", "serif"]
      }
    },
  },
  plugins: [],
}

