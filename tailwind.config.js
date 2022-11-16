/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mymd: '1282px',
      },
      colors: {
        'ungu-fti': '#AA52B2',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
