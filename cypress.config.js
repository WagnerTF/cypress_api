const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://barrigarest.wcaquino.me',
    viewportWidth: 1536,
    viewportHeight: 960,

    //dowloadsFolder:"cypress/downloads"
    //defaultCommandTimeout: false,
    screenshotsFolder: 'cypress/screenshots'
  },
});