/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        screen: '100vh',
        full: '100%',
        maincontent: 'calc(100vh - 6%)',
      },
      colors: {
        'popclr': '#0d135c',
        'mainclr': '#060a36',
        'text-color': '#b3b3b3',
      },
    },
  },
  plugins: [],
}