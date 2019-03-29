module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-custom-media": {
      importFrom: "src/assets/css/breakpoints.css"
    },
    "postcss-preset-env": {
      stage: 0,
      features: {
        "nesting-rules": true
      }
    }
  }
};
