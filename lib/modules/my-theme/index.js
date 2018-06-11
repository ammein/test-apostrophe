var _ = require('lodash');

module.exports = {
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
    construct : function(self,options){
        var superPushAssets = self.pushAssets;
        self.pushAssets = function () {
            superPushAssets();
            // Every asset you have in public folder
            // For All Scripts
            _.each(self.scripts || [] , function(item){
                self.pushAsset('script', item.name , item);
            });
            // For All Stylesheets
            _.each(self.stylesheets || [] , function(item){
                self.pushAsset('stylesheet', item.name , item);
            });
        };

    }
}