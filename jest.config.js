/** @format */

module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/jest-transformer.js',
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  setupFiles: ['./jest.setup.js'],
  testPathIgnorePatterns: ['./.next/', './node_modules/', 'out', '__mocks__'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
}
