module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      urbanist: ['Urbanist', 'Helvetica', 'Arial', 'sans-serif'],
      aerotis: ['Aerotis', 'Helvetica', 'Arial', 'sans-serif'],
      almara: ['Almara', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      black: '#0F0F0F',
      white: '#FAFAFA',
    },
    extend: {
      flex: {
        'embla': '0 0 100%',
      },
      fontSize: {
        'nav-link': '1.125rem',
      },
      opacity: {
        '35': '0.35',
      },
      backgroundColor: {
        'black': '#0F0F0F',
        'white': '#FAFAFA',
      },
    },
  },
  plugins: [],
}
