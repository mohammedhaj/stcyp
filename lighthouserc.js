module.exports = {
    ci: {
      // Static site example
collect: {
    numberOfRuns: 1,
    staticDistDir: "./cypress/e2e/step_definitions/spec.js",
    // url: ['https://jpetstore.tricentis.com/jpetstore/actions/Catalog.action']
  },
  upload: {
    target: 'temporary-public-storage',
  },
    },
  };