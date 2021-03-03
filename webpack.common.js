const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.tsx'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/u,
        test: /\.tsx?$/u,
        use: 'ts-loader',
      },
      {
        exclude: /node_modules/u,
        test: /\.modernizrrc\.js$/u,
        use: 'webpack-modernizr-loader',
      },
    ],
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src'),
      modernizr$: path.resolve(__dirname, '.modernizrrc.js'),
    },
    extensions: ['.js', '.ts', '.tsx', '.css'],
  },
  target: 'web',
};
