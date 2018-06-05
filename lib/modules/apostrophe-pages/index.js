// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu
module.exports = {
  filters: {
      // Grab our ancestor pages, with two levels of subpages
      ancestors: {
        children: {
          // Set depth to 2 for looking deep subpages of children
          depth: 2
        }
      },
      // We usually want children of the current page, too
      children: true
    },
    // other apostrophe-pages options like `types` ...
    types: [
      {
        name : 'default',
        label : 'Default'
      },
      {
        name : 'home',
        label : 'Home'
      },
      {
        name: 'people-page', // make it singular
        label: 'People'
      }
  ]
};
