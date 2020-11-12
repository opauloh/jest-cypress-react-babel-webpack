const path = require('path')

module.exports = {
  ...require('./jest-common'),
  displayName: 'client',
  coverageDirectory: path.join(__dirname, '../coverage/server'),
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.js'],
  snapshotSerializers: ['jest-emotion'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
