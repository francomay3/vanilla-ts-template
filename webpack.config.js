const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
module.exports = {
  devServer: {
    compress: true,
    port: 3000,
    static: { directory: path.join(__dirname, "dist") },
  },
  entry: "./src/index.ts",
  module: {
    rules: [
      { test: /\.(png|jpe?g|gif|svg|ico)$/i, use: [{ loader: "file-loader" }] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
    ],
  },
  output: { filename: "bundle.js", path: path.resolve(__dirname, "dist") },
  plugins: [
    new HtmlWebpackPlugin({ title: "My App", template: "src/index.html" }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
};
