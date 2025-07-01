/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'xl': ['2.5rem', { lineHeight: '1.2' }], // 40px
        'lg': ['1.25rem', { lineHeight: '1.4' }], // 20px
        'base': ['1rem', { lineHeight: '1.5' }], // 16px
        'sm': ['0.875rem', { lineHeight: '1.4' }], // 14px
        'xs': ['0.75rem', { lineHeight: '1.2' }], // 12px
      },
      colors:{
        background: '#F8FAFC',
        focus: '#3662E3', // Niebieski
        status: {
          todo: '#E3E8EF', // Jasny szary
          inprogress: {
            default: '#F5D565', // Jasny żółty
            accent: '#E9A23B', // Pomarańczowy
          },
          completed: {
            default: '#A0ECB1', // Jasnozielony
            accent: '#32D657', // Zielony
          },
          wontdo : {
            default: '#F7D4D3', // Czerwony
            accent: '#DD524C', // Ciemniejszy czerwony
          },
        },
        button: {
          add: {
            default: '#F5E8D5', // Jasny beż
            accent: '#E9A23B', // Pomarańczowy
          },
          save: {
            default: '#3662E3', // Niebieski
          },
          delete: {
            default: '#00000033', // jasny szary
            accent: '#97A3B6' // ciemny szary
          }
        }
      },
    },
  },
  plugins: [],
}