module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      //This is a low threshold to allow for gradual improvement. Adjust as needed.
      branches: 50,
      lines: 70,
      statements: 70,
    },
  },
};
