// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default, and to use jQuery 3.x

module.exports = {
// All assets moved to theme module to avoid conflict
  jQuery : 3,
  stylesheets : [
    {
      name : 'site'
    }
  ]
};
