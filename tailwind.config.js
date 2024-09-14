/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',      
        darkGray: '#0f0e0e',  
        lightGray: '#F1F1F1', 
        hover: '#8C1D2E',     
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}