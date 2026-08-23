/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        charcoal: {
          50: '#f5f5f4',
          100: '#e7e5e3',
          200: '#d3cfc9',
          300: '#b0aaa1',
          400: '#847c71',
          500: '#615a52',
          600: '#4a443e',
          700: '#363330',
          800: '#242220',
          900: '#151312',
          950: '#0a0908',
        },
        gold: {
          50: '#fbf6e9',
          100: '#f5e9c4',
          200: '#ead491',
          300: '#e0c078',
          400: '#d4af65',
          500: '#c19a4b',
          600: '#a3803a',
          700: '#82652f',
          800: '#5f4a24',
          900: '#3f3118',
          950: '#241b0d',
        },
        cream: {
          50: '#fdfcfa',
          100: '#f8f5ef',
          200: '#efe9dc',
          300: '#e2d9c5',
          400: '#cbbc9c',
          500: '#a99a78',
        },
        success: {
          500: '#4a7c59',
          600: '#3a6247',
        },
        warning: {
          500: '#b98a2c',
          600: '#96701f',
        },
        error: {
          500: '#a3402f',
          600: '#853323',
        },
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(212,175,101,0.35)',
        'gold-lg': '0 20px 60px -15px rgba(0,0,0,0.6)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-up-slow': 'fadeInUp 1.4s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite',
        'bounce-slow': 'bounceSlow 2.2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
};
