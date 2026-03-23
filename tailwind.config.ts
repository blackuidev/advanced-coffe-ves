import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/lightswind/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brown: {
          '50': '#fdf8f6',
          '100': '#f2e8e5',
          '200': '#eaddd7',
          '300': '#e0cec7',
          '400': '#d2bab0',
          '500': '#bfa094',
          '600': '#a18072',
          '700': '#977669',
          '800': '#846358',
          '900': '#43302b',
        },
      },
      fontFamily: {
        sans: ['"Lato"', 'sans-serif'],
      },
      animation: {
        'aurora': 'aurora 60s linear infinite',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '0% 50%',
          },
          to: {
            backgroundPosition: '200% 50%',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('lightswind/plugin')
],
};

export default config;
