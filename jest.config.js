const path = require('path')

module.exports = {
  // testEnvironment : 'jest-environment-node'
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js')
  },
  snapshotSerializers: ['jest-emotion'],
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
}