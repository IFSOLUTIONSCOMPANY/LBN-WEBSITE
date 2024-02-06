/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    screens: {
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      '2xl': "1536px",
      'cb': "980px",
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["dracula", "dark"],
  },
  plugins: [require('daisyui')],
}

