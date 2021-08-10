module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Overpass", "sans-serif"],
        hero: ["Langar", "sans-serif"],
      },
      colors: {
        primary: "#303669",
      },
      spacing: {
        112: "28rem",
        128: "32rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
