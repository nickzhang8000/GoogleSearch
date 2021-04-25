const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: require.resolve("style-loader"),
          },
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: require.resolve('sass-loader'),
          }, 
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new Dotenv()
  ],
};
