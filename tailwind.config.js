/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#848c2f',
      secondary: '#fcc044',
      tertiary: '#dd5449',
      quaternary: '#422c18',
      brown: '#3b251a',
      brownHover: '#4d3a2e',
      cream: '#FFFEFC',
      lightbrown: '#746862',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      while: '#ffffff',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Luckiest Guy', 'sans-serif'],
      serif: ['Aleo', 'serif'],
      grand: ['Grand Hotel', 'cursive'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
    plugins: [],
  },
  plugins: [],
}