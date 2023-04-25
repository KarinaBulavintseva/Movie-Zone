/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    '^.+\\.svg$': 'svg-jest'
  },
  transform: {
    '\\.svg$': 'svg-jest'
  }
};
