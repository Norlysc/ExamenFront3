/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',      // Color oscuro para el fondo
        darkGray: '#1E1E1E',  // Gris oscuro para elementos secundarios
        lightGray: '#F1F1F1', // Gris claro para el fondo
        hover: '#8C1D2E',     // Color para hover
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}