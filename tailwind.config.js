module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      urbanist: ['Urbanist', 'Helvetica', 'Arial', 'sans-serif'],
      aerotis: ['Aerotis', 'Helvetica', 'Arial', 'sans-serif'],
      almara: ['Almara', 'Helvetica', 'Arial', 'sans-serif'],
    },
    boxShadow: {
      'input': 'inset 0px 1px 8px rgba(85, 85, 85, 0.15)',
    },
    colors: {
      transparent: 'transparent',
      'light-gray': 'rgba(15, 15, 15, 0.10)',
      'dark-gray': 'rgba(25, 25, 25, 0.35)',
      black: '#0F0F0F',
      white: '#FAFAFA',
      green: 'rgba(17, 146, 118, 0.25)',
      pink: 'rgba(242, 156, 183, 0.25)',
    },
    extend: {
      backgroundColor: {
        'black': '#0F0F0F',
        'white': '#FAFAFA',
      },
      flex: {
        'embla': '0 0 100%',
      },
      fontSize: {
        'nav-link': '1.125rem',
      },
      margin: {
        '120': '30rem',
      },
      minHeight: {
        'mobile-carousel': '90vh',
      },
      opacity: {
        '35': '0.35',
      },
    },
  },
  plugins: [],
}
