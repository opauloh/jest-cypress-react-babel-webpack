const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./style-mock.js'),
  },
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    'shared',
    __dirname,
  ],
  watchPlugins: ['jest-watch-select-projects'],
}
