const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { inDev } = require('./webpack.helpers');

module.exports = [
  new HtmlWebpackPlugin({ 
    template: 'src/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
  new ForkTsCheckerWebpackPlugin(),
  inDev() && new ReactRefreshWebpackPlugin(),
].filter(Boolean);