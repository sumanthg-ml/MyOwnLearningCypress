const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q5rk7b',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: '**/2-advanced-examples/.*.js',
  },
});
