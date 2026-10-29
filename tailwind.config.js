/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        yark: {
          green: '#009d5a',
          emerald: '#00c870',
          darkgreen: '#006d3e',
          gold: '#eab308',
          bg: '#040d14',
          card: 'rgba(7, 21, 32, 0.75)',
          cardBorder: 'rgba(0, 157, 90, 0.25)',
          muted: '#94a3b8',
          border: 'rgba(255, 255, 255, 0.1)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(0, 157, 90, 0.4)',
        glowLg: '0 0 45px -5px rgba(0, 157, 90, 0.55)',
        glowGold: '0 0 35px -5px rgba(234, 179, 8, 0.45)',
        card: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit-glow': 'orbitGlow 6s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        orbitGlow: {
          '0%': { transform: 'scale(0.98)', opacity: '0.6' },
          '100%': { transform: 'scale(1.02)', opacity: '0.9' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
};
