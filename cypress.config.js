const { defineConfig } = require("cypress");
const env = require("./cypress.env.js");

module.exports = defineConfig({
  expose: env,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
