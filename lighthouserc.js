module.exports = {
    ci: {
      // Static site example
collect: {
    numberOfRuns: 1,
    staticDistDir: "./public --url=http://localhost/checkout.html"
    //staticDistDir: "./cypress/e2e",
    
   // url: ['https://jpetstore.tricentis.com/jpetstore/actions/Catalog.action']
  },
  upload: {
    target: 'temporary-public-storage',
  },
    },
  };