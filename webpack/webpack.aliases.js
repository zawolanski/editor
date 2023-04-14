const { createWebpackAliases } = require('./webpack.helpers');

module.exports = createWebpackAliases({
  '@src': 'src',
  '@components': 'src/components',
  '@styles': 'src/styles',
  '@assets': 'src/assets',
  '@config': 'src/config',
  '@pages': 'src/pages',
  '@helpers': 'src/helpers',
  '@hooks': 'src/hooks',
  '@templates': 'src/templates',
  '@locales': 'src/locales',
});
