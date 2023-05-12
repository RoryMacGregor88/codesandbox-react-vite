const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./frontend/index.tsx",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "frontend", "dist"),
    filename: "main.bundle.js"
  },
  resolve: {
    extensions: [".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: "./frontend/index.html" })
  ]
};
