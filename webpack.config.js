module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `@import "src/assets/styles/_colors.scss";
@import "src/assets/styles/_variables.scss";`,
            },
          },
        ],
      },
    ],
  },
};
