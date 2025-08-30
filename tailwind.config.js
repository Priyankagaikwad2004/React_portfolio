module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6EE7B7',
          DEFAULT: '#34D399',
          dark: '#10B981'
        },
        secondary: {
          light: '#93C5FD',
          DEFAULT: '#3B82F6',
          dark: '#2563EB'
        },
        accent: {
          light: '#F9A8D4',
          DEFAULT: '#EC4899',
          dark: '#DB2777'
        },
        dark: {
          100: '#1E293B',
          200: '#0F172A',
          300: '#020617'
        },
        light: {
          100: '#F8FAFC',
          200: '#E2E8F0',
          300: '#CBD5E1'
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    },
  },
  
  plugins: [],
}

