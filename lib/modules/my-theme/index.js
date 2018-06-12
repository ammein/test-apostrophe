var _ = require('lodash');
module.exports = {
    stylesheets : [
        {   // Make sure your directory after css folder is correct for specific search
            name : 'bootstrap/bootstrap.min'
        },
        {
            name : 'custom'
        },
        {
            name : 'font-awesome/css/font-awesome.min'
        }
    ],
    scripts : [
        {
            name : 'bootstrap/bootstrap.min'
        }
    ],
    construct : function(self,options){
        // Every asset you have in public folder
        _.each(options.stylesheets || [] , function(item){
            self.pushAsset('stylesheet', item.name);
        });
        _.each(options.scripts || [] , function(item){
            self.pushAsset('script' , item.name)
        });

        // self.pushAsset('','font-awesome/fonts/fontawesome-webfont.svg');
    }
}