module.exports = {
    ci: {
      // Static site example
collect: {
    staticDistDir: './cypress/e2e',
     url: ['https://jpetstore.tricentis.com/jpetstore/actions/Catalog.action']
  },
  upload: {
    target: 'temporary-public-storage',
  },
    },
  };