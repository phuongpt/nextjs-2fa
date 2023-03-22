module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '^.+\\.png|jpg|jpeg|gif|webp|avif|ico|bmp$':
      '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(uuid))',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.(json)$': `<rootDir>/__mocks__/fileJsonMock.js`,
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp)$/i': `<rootDir>/__mocks__/fileMock.js`,
    '@app/shared/assets': '<rootDir>/libs/shared/assets/src/index.ts',
    '@app/shared/styles': '<rootDir>/libs/shared/styles/src/index.ts',
    '@app/shared/translations':
      '<rootDir>/libs/shared/translations/src/index.ts',
    '@app/auth': '<rootDir>/libs/auth/src/index.ts',
    '@/components/(.*)': '<rootDir>/components/$1',
    '@/services/(.*)': '<rootDir>/services/$1',
    '@/stores/(.*)': '<rootDir>/stores/$1',
    '@/utils/(.*)': '<rootDir>/utils/$1',
    '@/constants/(.*)': '<rootDir>/constants/$1',
    '@/contexts/(.*)': '<rootDir>/contexts/$1',
    '@/routing/(.*)': '<rootDir>/routing/$1',
    '@/hooks/(.*)': '<rootDir>/hooks/$1',
    '@/redux/(.*)': '<rootDir>/redux/$1',
    '@/types/(.*)': '<rootDir>/types/$1',
    '@/api/(.*)': '<rootDir>/api/$1',
  },
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      diagnostics: {
        pathRegex: /\.(spec|test)\.ts$/,
        warnOnly: true,
      },
    },
  },
  testPathIgnorePatterns: ['<rootDir>/cypress/', 'root/.cache/Cypress/'],
  testEnvironment: 'jsdom',
  setupFiles: ['jest-canvas-mock'],
}
