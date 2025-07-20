/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Luxurious Gold and Black Theme
        primary: '#D4AF37', // Elegant gold
        
        // Background Colors
        'bg-primary': '#000000',
        'bg-secondary': '#0A0A0A',
        'bg-tertiary': '#2A2A2A',
        'bg-panel': '#0A0A0A',
        'bg-card': '#2A2A2A',
        
        // Legacy support (mapped to new system)
        dark: '#000000',
        charcoal: '#0A0A0A',
        'charcoal-light': '#2A2A2A',
        
        // Typography Colors
        'text-primary': '#FFFFFF',
        'text-secondary': '#CCCCCC',
        'text-body': '#B0B0B0',
        'text-muted': '#888888',
        'text-footnote': '#999999',
        
        // Interactive Elements
        'border-primary': '#404040',
        'border-secondary': 'rgba(255, 255, 255, 0.1)',
        'hover-overlay': 'rgba(212, 175, 55, 0.15)',
        'hover-subtle': 'rgba(255, 255, 255, 0.05)',
        
        // Accent Colors (Gold tones)
        'accent-gold': '#FFD700',
        'accent-gold-dark': '#B8860B',
        'accent-gold-muted': '#DAA520',
        
        // Button Colors
        'btn-primary-bg': '#D4AF37',
        'btn-primary-text': '#FFFFFF',
        'btn-primary-hover': '#B8860B',
        'btn-secondary-bg': '#FFFFFF',
        'btn-secondary-text': '#000000',
        
        // Utility Colors
        'gold-glow': '#D4AF3720',
      },
      backgroundColor: {
        'gradient-dark': 'linear-gradient(135deg, #1C1C1E 0%, #2A2A2A 100%)',
        'gradient-panel': 'linear-gradient(145deg, #1E1E1E 0%, #2A2A2A 100%)',
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