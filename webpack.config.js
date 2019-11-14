const path = require("path");
const webpack = require("webpack");

const { copy } = require("./utils");

copy();

module.exports = {
  mode: "production",
  entry: "./index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./"),
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
