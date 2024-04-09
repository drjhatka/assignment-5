/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'banner': "url('images/banner1.png')",
        'footer-texture': "url('/img/footer-texture.png')",
       })
    },
  },
  plugins: [],
}