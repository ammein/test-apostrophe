var _ = require('lodash');

module.exports = {
    label : 'My Theme Module',
    stylesheets : [
        {
            // Using directory on name for specific search
            name : 'bootstrap/bootstrap.min'
        },
        {
            name : 'custom',
            when : 'always'
        },
        {
            name : 'font-awesome.min',
            when : 'always'
        }
    ],
    scripts : [
        {
            name : 'bootstrap/bootstrap.min',
            when : 'always'
        }
    ],
    afterConstruct : function(self){
        self.pushAssets();
    },
    construct : function(self,options){
        self.pushAssets = function () {
            // Every asset you have in public folder
            // For All Scripts
            _.each(self.scripts || [] , function(item){
                self.pushAsset('script', item.name , {when : item.when});
            });
            // For All Stylesheets
            _.each(self.stylesheets || [] , function(item){
                self.pushAsset('stylesheet', item.name , {when : item.when});
            });
        };

    }
}