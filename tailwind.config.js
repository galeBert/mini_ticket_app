/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./app/components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-xl': ['22px', { lineHeight: '26px', fontWeight: '700' }]

      },
      colors: {
        transparent: 'transparent',
        black: {
          100: '#020202'
        },
        neutral: {
          200: '#D5D5D5',
          500: '#959697'
        },
        green: {
          500: '#3FA535'
        }
      },
    }
  },
  plugins: [],
}

