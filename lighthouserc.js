module.exports = {
    ci: {
      // Static site example
collect: {
    numberOfRuns: 1,
   // staticDistDir: "./public --url:['https://jpetstore.tricentis.com/jpetstore/actions/Catalog.action']"    
    
   url: ['https://jpetstore.tricentis.com/jpetstore/actions/Catalog.action']
  },
  upload: {
    target: 'temporary-public-storage',
  },
    },
  };