module.exports = {
    extend : 'apostrophe-widgets',
    label : 'Drawer',
    addFields : [
        {
            type : 'string',
            label : 'Title',
            name : 'title'
        },
        {
            /*
            The area field type defines an editable content area that allows users 
            to add a series of widgets.It is exactly like calling apos.area 
            in a page template.
            */
            type : 'area',
            name : 'content',
            label : 'Content',
            // Provide options INSIDE content schema
            // NESTED WIDGETS
            options : {
                // Like usual.If widgets have series , put inside widgets : {}
                widgets : {
                    'apostrophe-images': {
                        size: 'full'
                    },
                    'apostrophe-rich-text': {
                        toolbar: ['Bold', 'Italic']
                    }
                }
            }
        }
    ],
    construct: function (self, options) {
        /*
        The superPushAssets method is :
        creating our own replacement method, 
        invoking the original from within it, 
        and then pushing our own asset to the browser.
        */
        var superPushAssets = self.pushAssets;
        self.pushAssets = function () {
            superPushAssets();
            self.pushAsset('stylesheet', 'editWidget', {
                when: 'always' // always mean generate this stylesheet no matter user logged in or not. (Performance hit)
            });
            self.pushAsset('script' , 'editWidget' , {
                when : 'always'
            });
        };
    }
};