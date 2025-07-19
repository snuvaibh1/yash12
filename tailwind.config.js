/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF0040',
        dark: '#0A0A0A',
        charcoal: '#1A1A1A',
        'charcoal-light': '#2A2A2A',
        'red-glow': '#FF004020',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'grain': 'grain 0.2s steps(10) infinite',
        'shimmer': 'shimmer 2s infinite',
        'magnetic': 'magnetic 0.3s ease-out',
        'reveal': 'reveal 1s ease-out forwards',
        'orbit': 'orbit 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #FF0040, 0 0 10px #FF0040, 0 0 15px #FF0040',
            filter: 'brightness(1)'
          },
          '100%': { 
            boxShadow: '0 0 10px #FF0040, 0 0 20px #FF0040, 0 0 30px #FF0040',
            filter: 'brightness(1.2)'
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg) scale(1)' 
          },
          '33%': { 
            transform: 'translateY(-20px) rotate(2deg) scale(1.05)' 
          },
          '66%': { 
            transform: 'translateY(-10px) rotate(-2deg) scale(0.95)' 
          },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        magnetic: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(2deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
        reveal: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(50px) scale(0.9)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)' 
          },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 5px rgba(255, 0, 64, 0.5)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(255, 0, 64, 0.8), 0 0 40px rgba(255, 0, 64, 0.4)',
            transform: 'scale(1.05)'
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      willChange: {
        'transform': 'transform',
        'opacity': 'opacity',
        'filter': 'filter',
      },
      scale: {
        '200': '2',
        '300': '3',
      },
      blur: {
        '4xl': '72px',
        '5xl': '96px',
      },
    },
  },
  plugins: [],
};