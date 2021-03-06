var path = require('path');

var apos = require('apostrophe')({
  shortName: 'test-project',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {

    // This one is for children of link pages
      'apostrophe-pages': {},
      'apostrophe-express' : {
        csrf : {
          exceptions : ['/my-post-route']
        }
      },
      'apostrophe-workflow' :{
        alias : 'workflow'
      },
      'apostrophe-admin-bar' :{
        addGroups : [{
          label : 'Admin',
          items :['apostrophe-users' , 'apostrophe-groups']
        },{
          label : 'Attachments',
          items : ['apostrophe-images' , 'apostrophe-files']
        },{
          label : 'Pieces',
          items : ['contact-form','people']
        }]
      },
      'contact-form' : {},
      'contact-form-widgets' : {},
      'link-widgets' : {},
      'page-link-widgets' : {},
      'drawer-widgets' : {},
      'two-column-widgets' : {},
      // Begin Pieces of people
      'people' : {},
      'people-widgets' : {
        extend : 'apostrophe-pieces-widgets',
        filters : {
          projection : {
            slug : 1,
            title : 1,
            type : 1,
            tags : 1,
            phone : 1,
            thumbnail : 1
          }
        }
      },
      'people-pages' : {
        extend : 'apostrophe-pieces-pages',
        piecesFilters : [
          {
            name : 'tags',
          },
          {
            name : 'title'
          }
        ]
      },
      'default-pages' :{
        extend : 'apostrophe-custom-pages',
        name : 'default',
        addFields : [
          {
            name : 'vendor',
            type : 'string',
            label : 'Vendor'
          }
        ]
      },
      // End Pieces of people
      settings: {
        // So we can write `apos.settings` in a template
        alias: 'settings',
        // Let's pass in a Google Analytics id, just as an example
        analyticsId: 'UA-XYZPDQ'
      },
      'apostrophe-users' : {},
      // load my own-theme-module
      'my-theme' : {},

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') }

  }
});
