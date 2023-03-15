/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/Challenges/**/*.{js,jsx,ts,tsx}',
    './dist/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
