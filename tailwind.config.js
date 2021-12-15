module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'my-color': '#ff0000'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
