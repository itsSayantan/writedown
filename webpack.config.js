const path = require("path");
const webpack = require("webpack");

const { copy } = require("./utils");

copy();

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool:
    process.env.NODE_ENV === "production"
      ? "source-map"
      : "cheap-module-eval-source-map",
  entry: "./index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "src/react"),
    disableHostCheck: true,
    port: 8080,
    compress: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /s[ac]ss/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /.tsx?$/,
        use: ["ts-loader"]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
