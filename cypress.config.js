const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q5rk7b',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    excludeSpecPattern: '**/2-advanced-examples/.*.js',
  },
});
