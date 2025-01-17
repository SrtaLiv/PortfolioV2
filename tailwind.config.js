/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-primary': '#A3B18A', // Aquí agregas tu color personalizado
        'green-secondary': '#DAD7CD',
        'green-text': '#344E41',
      },
    },
  },
  plugins: [],
};
