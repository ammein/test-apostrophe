module.exports = {
    extend: 'apostrophe-pieces',
    permissionsFields : true,
    name: 'person',
    label: 'Person',
    pluralLabel: 'People',
    addFields : [
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
            name: 'title',
            label: 'Full Name',
            type: 'string',
            required: true,
            contextual: true
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'string',
            required: true,
            contextual: true
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
        },
        {
            name: 'reputation',
            label: 'Reputation',
            type: 'integer'
        }
    ],
    contextual : true,
    arrangeFields: [{
            name: 'contact',
            label: 'Contact',
            fields: ['firstName', 'lastName', 'phone']
        },
        {
            name: 'admin',
            label: 'Administrative',
            fields: ['slug', 'published', 'tags']
        },
        {
            name: 'content',
            label: 'Biographical',
            fields: ['thumbnail', 'body']
        }
    ],
    construct: function(self, options) {
        self.beforeSave = function(req, piece, options, callback) {
            // Override title and MUST SET CONTEXTUAL to able to save. Let the 
            // backend self.beforeSave method do this thing.
            // You know why I don't set piece.slug ?
            // Because once you already set title , apostrophe made it for you :)
            // BUT must put contextual : true on slug. If not, it will prompt you :*
            piece.title = piece.firstName + ' ' + piece.lastName;
            return callback();
        };

        // I make people name of the task so that I can call `node app people:people`
        self.addTask('people' , 'To list all the people to see if its working or not' , function(apos , argv){
            const req = apos.tasks.getAnonReq();

            return self.find(req).toArray().then(people => {
                console.log("List of all people \n" , people);
            });
            // catch and display any error that rejects the promise

        });

    }
};