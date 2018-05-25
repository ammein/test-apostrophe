module.exports = {        
  extend: 'apostrophe-widgets',        
  label: 'Two Column Layout',
  skipInitialModal : true,        
  addFields: [
    {
      type : 'area',
      name : 'areaLeft',
      label : 'Left Column'
    },
    {
      type : 'area',
      name : 'areaRight',
      label : 'Right Column'
    }
  ]        
};