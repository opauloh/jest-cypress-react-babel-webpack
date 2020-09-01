module.exports = {
  // testEnvironment : 'jest-environment-node'
  testEnvironment : 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.css$' : require.resolve('./test/style-mock.js')
  }
}