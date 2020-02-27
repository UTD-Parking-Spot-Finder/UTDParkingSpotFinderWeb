const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');

const title = 'Parking Spot Finder';

module.exports = {
  entry : './src/main.js',
  output : {
    filename : 'main.js'
  },
  module : {
    rules : [
      {
        test : /\.(js|jsx)$/,
        exclude : /node_modules/,
        use : ['babel-loader']
      },
      {
        test : /\.(css|sass)$/i,
        use : [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve : {
    extensions : ['*', '.js', '.jsx']
  },
  plugins : [
    new HtmlWebpackPlugin({
      title: title,
      template: './src/index.ejs'
    }),
    new MiniCssExtractPlugin()
  ]
};