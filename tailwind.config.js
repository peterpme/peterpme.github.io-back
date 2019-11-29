const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      colors: {
        purple: {
          ...colors.purple,
          "900": "#06061e",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      colors: {
        purple: {
          ...colors.purple,
          '900': "#06061e"
        }
      }
    }
  },
  variants: {},
  plugins: []
}
