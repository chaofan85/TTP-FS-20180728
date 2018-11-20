const path = require("path");
var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "app/assets/javascripts"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["@babel/env", "@babel/react"]
          }
        }
      }
    ]
  },
  devtool: "source-map"
};
