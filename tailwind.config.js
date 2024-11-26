/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E4B40D',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        firaCode: ['Fira Code', 'sans-serif'],
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #E4B40D, #FFE68F)',
      },
    },
  },
  plugins: [],
};
