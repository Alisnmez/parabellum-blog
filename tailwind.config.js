/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Projedeki tüm JS, JSX, TS ve TSX dosyaları dahil
  ],
  theme: {
    extend: {
      fontFamily: {
        merienda: ['Merienda', 'cursive'],
        playfair: ['Playfair Display', 'serif'],

      },
    },
  },
  plugins: [],
}
