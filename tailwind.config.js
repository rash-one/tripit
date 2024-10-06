/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateX(-100%)' },

        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      
      },
      animation: {
        'scroll-animation': 'scroll 20s  linear infinite',
        'slide-in': 'slide-in 0.5s ease-out forwards',
      },

    },
  },
  plugins: [],
}

