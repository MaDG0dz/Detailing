/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#E8C96A',
          dim:     '#8B6F2E',
          subtle:  'rgba(201,168,76,0.12)',
        },
        surface: {
          DEFAULT: '#111111',
          2:       '#181818',
          3:       '#222222',
        },
        brand: {
          bg:         '#0A0A0A',
          foreground: '#F5F5F0',
          muted:      '#71717A',
          border:     'rgba(201,168,76,0.15)',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans:    ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.85' }],
        '11xl': ['12rem', { lineHeight: '0.82' }],
      },
      letterSpacing: {
        '3xl': '0.25em',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};