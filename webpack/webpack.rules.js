const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { inDev } = require('./webpack.helpers');

module.exports = [
  {
    // Typescript loader
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    // CSS Loader
    test: /\.css$/,
    use: [ 
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader }, 
      { loader: 'css-loader' },
      { loader: 'postcss-loader' }
    ]
  },
  {
    // SCSS (SASS) Loader
    test: /\.s[ac]ss$/i,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
      { loader: 'postcss-loader' },
      { loader: 'sass-loader' },
    ],
  },
  {
    // Assets loader
    test: /\.(jpe?g|png|webp)$/i,
    type: 'asset',
    generator: {
      filename: 'assets/[hash][ext][query]',
    },
  },
  {
    // SVG loader
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
  }
]