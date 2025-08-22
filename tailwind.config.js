module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-dark': '#333333',
        'brand-gray': '#F0F0F0',
        'brand-light-gray': '#F9F9F9',
        'brand-off-white': '#FEFEFE',
      },
    },
  },
  plugins: [],
};
