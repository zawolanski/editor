const { createWebpackAliases } = require('./webpack.helpers');

module.exports = createWebpackAliases({
  '@src': 'src',
  '@components': 'src/components',
  '@styles': 'src/styles',
  '@assets': 'src/assets',
});