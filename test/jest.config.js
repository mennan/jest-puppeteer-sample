module.exports = {
  preset: "jest-puppeteer",
  globals: {
    URL: "https://localhost:5001"
  },
  testMatch: ["**/__test__/**/*.test.js"],
  verbose: true
};
