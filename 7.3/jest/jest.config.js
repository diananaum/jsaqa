/** @type {import('jest').Config} */
const config = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
  ],
  coverageReporters: ["html"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};

module.exports = config;
