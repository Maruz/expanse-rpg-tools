module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/_template/'],
};
