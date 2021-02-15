module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.{js,jsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flexGrow: {
        '3': '3',
        '6': '6',
      },
      colors: {
        primary: '#FA5E30'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
