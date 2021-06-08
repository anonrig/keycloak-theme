const theme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ["../*.ftl"],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        lgs: '0 5px 15px 5px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        orange: colors.orange,
        warmGray: colors.warmGray,
        trueGray: colors.trueGray,
      },
      fontFamily: {
        sans: ['Inter var', ...theme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
