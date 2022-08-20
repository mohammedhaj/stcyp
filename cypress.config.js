const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
  const { pa11y } = require("@cypress-audit/pa11y");
  const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
  const fs = require("fs");
  const ReportGenerator = require('lighthouse/report/generator/report-generator');

module.exports = defineConfig({
  e2e: {
       async setupNodeEvents(on, config) {
        on("before:browser:launch", (browser = {}, launchOptions) => {
          prepareAudit(launchOptions);
        });
  
        on('task', {
          lighthouse: lighthouse((lighthouseReport) => {
            fs.writeFileSync(file= 'lhreport.html', 
               ReportGenerator.generateReport(lighthouseReport.lhr, outputModes='html'));
               pa11y: pa11y(console.log.bind(console))      
            }),
          })
           const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      })
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;      
    },
    specPattern: "cypress/e2e/features/*.feature",
       chromeWebSecurity: false,
  },
});


 