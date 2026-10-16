/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf7f7', sand: '#e8dedf', ink: '#40030d', violet: { DEFAULT: '#40030d', soft: '#f4ebec', deep: '#30020a' },
        coral: '#ffe482', blush: '#fff3c2',
      },
      fontFamily: { display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'], sans: ['"DM Sans"', 'system-ui', 'sans-serif'] },
      keyframes: { marquee: { to: { transform: 'translateX(-50%)' } } },
      animation: { marquee: 'marquee 30s linear infinite' },
    },
  },
  plugins: [],
}
