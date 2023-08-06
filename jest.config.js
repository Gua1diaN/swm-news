module.exports = {
    verbose: true,
    setupFilesAfterEnv: ['./setupTests.js'],
    transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
      '^.+\\.css$': 'jest-transform-css',
      '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file'
    },
    preset: 'ts-jest',
    "testEnvironment": "jsdom"
  };