const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/u,
        test: /\.css$/iu,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[hash:base64]',
              },
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
        },
        vendor: {
          chunks: 'initial',
          enforce: true,
          name: 'vendor',
          priority: 10,
          test: /node_modules/u,
        },
      },
    },
  },
  output: {
    filename: 'js/[name].[contenthash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: '[id].[contenthash].css',
      filename: 'css/[name].[contenthash].css',
    }),
  ],
});
