// in lib/modules/contact-form/index.js
var async = require('async');

module.exports = {
    extend: 'apostrophe-pieces',
    name: 'contact-form',
    label: 'Contact Form',
    // Can access modules like this apos.modules['module-name-here']
    alias: 'contactForm',
    addFields: [{
            name: 'name',
            type: 'string',
            label: 'Your Name',
            required: true
        },
        {
            name: 'email',
            type: 'string',
            label: 'Your Email',
            required: true
        },
        {
            name: 'title',
            type: 'string',
            label: 'Subject',
            required: true
        },
        {
            name: 'body',
            type: 'string',
            label: 'Message',
            textarea: true,
        }
    ],
    permissionsFields: false,
    // So that we can have the chance to override module when extend this
    afterConstruct: function (self) {
        self.setSubmitSchema();
    },

    construct: function (self, options) {

        self.setSubmitSchema = function () {
            self.submitSchema = self.apos.schemas.subset(self.schema, ['name', 'email', 'title', 'body']);
        };

        self.submit = function (req, callback) {
            var piece = {};
            return async.series([
                convert,
                insert
            ], callback);

            function convert(callback) {
                return self.apos.schemas.convert(req, self.schema, 'form', req.body, piece, callback);
            }

            function insert(callback) {
                return self.insert(req, piece, {
                    permissions: false
                }, callback);
            }
        };

    }
};