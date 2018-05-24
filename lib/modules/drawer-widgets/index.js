module.exports = {
    extend : 'apostrophe-widget',
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
                'apostrophe-images' : {
                    size : 'full'
                },
                'apostrophe-rich-text' : {
                    toolbar : ['Bold', 'Italic']
                }
            }
        }
    ]
};