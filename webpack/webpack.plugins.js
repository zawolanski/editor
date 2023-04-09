const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const { inDev } = require('./webpack.helpers');

module.exports = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
  new ForkTsCheckerWebpackPlugin(),
  new ESLintPlugin({
    extensions: ['tsx', 'ts', 'js'],
    fix: true,
    failOnError: true,
  }),
  inDev() && new ReactRefreshWebpackPlugin(),
].filter(Boolean);
