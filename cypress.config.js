const { defineConfig } = require("cypress");
//const { allureCypress } = require("allure-cypress/reporter");
const webpack = require("@cypress/webpack-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");


module.exports = defineConfig({
  e2e: {
    specPattern:'**/*.feature',
    supportFile:'cypress/support/e2e.js',
    baseUrl: 'https://demo.seleniumeasy.com',
    defaultCommandTimeout: 5000,
    viewportHeight: 900,
    viewportWidth: 1400,
    waitForAnimations: true,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //allureCypress(on);
      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        webpack({
          webpackOptions: {
            resolve: {
              extensions: [".ts", ".js"],
            },
            module: {
              rules: [
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                      options: config,
                    },
                  ],
                },
              ]
            }
          }
        })
      )

      return config;
    },
  },
});
