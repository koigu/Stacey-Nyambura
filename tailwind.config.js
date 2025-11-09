/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00247D',    // PANTONE 281 XGC
        secondary: '#98B4D4',  // PANTONE 659 C
        accent: '#6D327C',     // PANTONE 2613 C
        highlight: '#DA1884',  // PANTONE 233 C
        orange: '#E8552E',     // PANTONE 17-1461 TCX
        dark: '#1f2937',
        light: '#f8fafc'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
