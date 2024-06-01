module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '<rootDir>/__mocks__/setupMocks.js',
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/jestSetupFile.js', // Add this line
  ],
  transformIgnorePatterns: [
    'node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)',
    'jest-runner',
  ],
  modulePathIgnorePatterns: ['<rootDir>/__tests__/ComponentWrapper.tsx'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
