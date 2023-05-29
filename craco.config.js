module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/assets/styles/_variables.scss";
          @import "src/assets/styles/_colors.scss";
        `,
      },
    },
  },
};
