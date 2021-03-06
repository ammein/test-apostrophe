module.exports = {
    extend : 'apostrophe-widgets',
    label: 'Link to a Page',
    addFields:[
        {
            /* _page ? because page is dynamic. Joins get fetched EVERYTIME this widget loaded ! 
            The relationship is dynamic. Properties that are dynamic , SHOULD NOT STORED BACK to MongoDB.

            Everything begins with _ (Underscore) will be ignored.
            */
            name: '_page',
            type: 'joinByOne',
            withType: 'apostrophe-page',
            label: 'Page',
            required: true,
            idField: 'otherId',
            filters : {
                projection : {
                    title : 1,
                    slug : 1
                }
            }
        },
        {
            name : 'special',
            type : 'boolean',
            label : 'You want special or not ?'
        }
    ]
};