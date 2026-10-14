/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf6ef', sand: '#efe8db', ink: '#17141f', violet: { DEFAULT: '#6a2cf5', soft: '#ece4ff', deep: '#4a17c4' },
        coral: '#ff6b5e', blush: '#ffc2d1',
      },
      fontFamily: { display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'], sans: ['"DM Sans"', 'system-ui', 'sans-serif'] },
      keyframes: { marquee: { to: { transform: 'translateX(-50%)' } } },
      animation: { marquee: 'marquee 30s linear infinite' },
    },
  },
  plugins: [],
}
