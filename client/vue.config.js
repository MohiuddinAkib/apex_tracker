const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../server/dist/public"),
  devServer: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:8000",
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/sass/main.scss"`,
      },
    },
  },
};
