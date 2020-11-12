const path = require('path')

module.exports = {
  ...require('./jest-common'),
  coverageDirectory: path.join(__dirname, '../coverage/server'),
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.js'],
  snapshotSerializers: ['jest-emotion'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  coverageThreshold: {
    global: {
      statements: 34,
      branches: 16,
      functions: 29,
      lines: 32,
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
}
