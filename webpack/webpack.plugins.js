const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv').config({ path: '.env' });

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
    failOnWarning: false,
    emitWarning: false,
  }),
  new CopyPlugin({ patterns: [{ from: './src/locales', to: 'locales' }] }),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(dotenv.parsed),
  }),
  inDev() && new ReactRefreshWebpackPlugin(),
].filter(Boolean);
