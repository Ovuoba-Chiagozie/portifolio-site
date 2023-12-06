/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes : {
        textAppear: {
              '0%' : {transform: 'translateY(36px)', opacity: '0'},
              '100%' : {transform:'translateY(0)',opacity:'1'}
        }
      },
      animation : {
        'text-appear' : 'textAppear 1.25s ease-in-out'
      }
    },
  },
  plugins: [],
}

