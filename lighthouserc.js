module.exports = {
    ci: {
      // Static site example
collect: {
    staticDistDir: './public',
    url: ['https://jpetstore.tricentis.com/jpetstore/actions/Catalog.action']
  },
  upload: {
    target: 'temporary-public-storage',
  },
    },
  };