/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgb(24, 157, 215) 0%, rgb(250, 169, 41) 25%, rgb(200, 40, 83) 50%, rgb(219, 88, 17) 74%, rgb(101, 159, 23) 100%)',
      },
    },
  },
  plugins: [],
}

