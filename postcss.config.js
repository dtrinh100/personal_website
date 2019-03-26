module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-custom-media": {
      extensions: {
        "--tablet": "(min-width:768px)",
        "--desktop": "(min-width:1024px)"
      }
    },
    "postcss-preset-env": {
      stage: 0
    }
  }
};
