/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        disco: {
          '0%': { transform: 'translateY(-50%) rotate(0deg)' },
          '100%': { transform: 'translateY(-50%) rotate(360deg)' },
        },
      },
      animation: {
        disco: 'disco 1.5s linear infinite',
      },
      fontFamily: {
        monsterrat: ['Montserrat', 'sans-serif'],
        robotomono:["Roboto Mono", "monospace"]
      },
      boxShadow: {
        'inner-white': 'inset 0 2px 4px rgba(255, 255, 255, 0.5)', 
      },
    },
  },
  plugins: [],
};