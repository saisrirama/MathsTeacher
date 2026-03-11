/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B1F3A',
        secondary: '#1E3A8A',
        accent: '#F4B400',
        lightbg: '#F5F7FA',
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 28px -14px rgba(11, 31, 58, 0.35)',
        card: '0 14px 28px -20px rgba(17, 24, 39, 0.45)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
