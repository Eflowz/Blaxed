/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-sm': '320px', 
        'mobile-mdi': '375px', 
        'mobile-lgi': '425px',  
        'mobile-xl': '765px',  
        'mobile-xxl': '768px',  
        'mobile-xzl': {'min': '340px', 'max': '375px'},
        'mobile-lge': {'min': '376px', 'max': '390px'},
        'mobile-lgo': {'min': '390px', 'max': '400px'},
        'mobile-lgp': {'min': '401px', 'max': '420px'},
        'mobile-lgq': {'min': '421px', 'max': '425px'},
        'mobile-lgr': {'min': '435px', 'max': '498px'},
        'mobile-xal': {'min': '650px', 'max': '767px'},
      },
    },
  },
  plugins: [],
}