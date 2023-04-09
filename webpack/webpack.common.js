const path = require('path');

module.exports = {
   stats: 'errors-warnings',
   entry: '/src/index.tsx',
   output: {
      path: path.join(__dirname, '../build/'),
      filename: '[name].[contenthash].js',
      clean: true
   },
   module: {
      rules: require('./webpack.rules'),
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      alias: require('./webpack.aliases'),
   },
   plugins: require('./webpack.plugins'),
}