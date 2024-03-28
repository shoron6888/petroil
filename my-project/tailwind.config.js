/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px"
      },
      fontFamily: {
        'pops': ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'hbg': '#282828',
        'hbdrbg': '#5C6A92',
        'navbg': '#F40404'
      },
      backgroundImage: {
        'bnrbg': 'url(./src/assets/banner.png)',
        'balbg': 'url(./src/assets/bal.png)',
        'ser1bg': 'url(./src/assets/ser1.png)',
        'ser2bg': 'url(./src/assets/ser2.png)',
        'combg': 'url(./src/assets/com.png)',
        'blogbg1':'url(./src/assets/blog.png)',
        'blogbg2':'url(./src/assets/blog2.png)',
        'blogbg3':'url(./src/assets/blog3.png)',
        

      }
    },
  },
  plugins: [],
}