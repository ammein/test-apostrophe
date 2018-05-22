module.exports = {
    // Use apostrophe-widgets by default. Apostrophe made everything from here using moog
    extend: 'apostrophe-widgets',
    label: 'Link to Anywhere',
    // These are schemas (addFields)
    addFields: [{
            name: 'url',
            type: 'url',
            label: 'URL',
            required: true
        },
        {
            name: 'label',
            type: 'string',
            label: 'Label',
            required: true
        }
    ]
};