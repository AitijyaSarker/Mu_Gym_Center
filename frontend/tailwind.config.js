/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#DC2626',
          dark: '#991B1B',
        },
        slate: {
          950: '#0b1120',
        },
      },
      boxShadow: {
        card: '0 15px 40px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}


