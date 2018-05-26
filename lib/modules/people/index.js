module.exports = {
    extend: 'apostrophe-pieces',
    permissionsFields : true,
    name: 'person',
    label: 'Person',
    pluralLabel: 'People',
    addFields: [{
            name: 'title',
            label: 'Full Name',
            type: 'string',
            required: true,
            contextual : true
        },
        {
            name: 'firstName',
            label: 'First Name',
            type: 'string',
            required: true
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'string',
            required: true
        },
        {
            name: 'body',
            label: 'Biography',
            type: 'area',
            options: {
                widgets: {
                    'apostrophe-rich-text': {
                        toolbar: ['Bold', 'Italic', 'Link', 'Unlink']
                    },
                    'apostrophe-images': {}
                }
            }
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'string'
        },
        {
            name: 'thumbnail',
            label: 'Thumbnail',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options: {
                limit: 1,
                minSize: [200, 200],
                aspectRatio: [1, 1]
            }
        }
    ],
    construct: function (self, options) {
        // .beforeSave is METHOD. Refer Doc
        self.beforeSave = function (req, piece, options, callback) {
            piece.title = piece.firstName + ' ' + piece.lastName;
            return callback();
        };
    }
};