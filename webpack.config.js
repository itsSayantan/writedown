const path = require("path");

const { cleanup, copy } = require("./utils");

cleanup();
copy();

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    port: 8080,
    hot: true,
    writeToDisk: true,
    compress: true
  }
};
