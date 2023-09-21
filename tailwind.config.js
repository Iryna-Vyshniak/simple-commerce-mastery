export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['32px', '42px'],
      '4xl': ['48px', '58px'],
      '5xl': ['52px', '62px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sport: ['Octin Sports', 'sans-serif'],
        hero: ['Ethnocentric', 'sans-serif']
      },
      colors: {
        primary: '#FFF7F5',
        'deep-red': '#b91c1c',
        'slate-gray': '#6D6D6D',
        'pale-blue': '#F5F6FF',
        'white-400': 'rgba(255, 255, 255, 0.80)',
        'bg-orange-500': '#f5e9dc',
        'bg-white-500': '#ffffff',
        'bg-blue-500': '#2563eb',
        'bg-slate-900': '#020617',
        'bg-red-500': '#b91c1c',
        'bg-yellow-500': '#facc15',
        'bg-green-500': '#15803d'
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        hero: 'url("assets/images/collection-background.svg")',
        card: 'url("assets/images/thumbnail-background.svg")'
      },
      screens: {
        wide: '1440px',
        mob: '480px'
      },
      scrollbar: ['rounded']
    }
  },
  plugins: [require('tailwind-scrollbar')]
};
