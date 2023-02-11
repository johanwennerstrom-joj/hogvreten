/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#494A53',
          200: '#4C4C4C',
          300: '#6D6E76',
          400: '#F4F4F4',
        },
        yellow: '#F2C31A',
        lavender: '#F4F0F8',
        white: '#F9F9F9',
      },
      spacing: {
        xl: '96px',
        "2lg": '80px',
        lg: "69px",
        md: '32px',
        sm: '24px',
        xs: '12px',
      },
      fontFamily: {
        inter: 'var(--inter)',
        sen: 'var(--sen)',
      },
      fontSize: {
        h1: ["56px", "64px"],
        h2: ["36px", "48px"],
        h3: ["28px", "40px"],
        body: ["18px", "28px"],
        nav: ["16px", "20px"],
        label: ["14px", "20px"]
      }
    },
  },
  plugins: [],
}
