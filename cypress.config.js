const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('@simonsmith/cypress-image-snapshot/plugin');
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  projectId: "55coxs",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      addMatchImageSnapshotPlugin(on);
      allureCypress(on, {
        resultsDir: "./allure-results",
        videoOnFailOnly: true,
      })
      return config;
      // implement node event listeners here
    },
    baseUrl: ('https://1000and1songs.com/')
  },
});
