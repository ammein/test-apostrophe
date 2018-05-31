module.exports = {
    'people-pages' : {
        extend : 'apostrophe-pieces-pages',
        piecesFilters: [{
            name: 'tags'
        }],
    },
    construct : function(self,options){
        var superPushAssets = self.pushAssets;
        self.pushAssets = function () {
            superPushAssets();
            self.pushAsset('stylesheet', 'always', {
                when: 'always'
            })
        }
    }
}