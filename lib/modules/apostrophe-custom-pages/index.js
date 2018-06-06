module.exports = {
    beforeConstruct : function(self,options){
        options.addFields = [
            {
                name : 'approved',
                type : 'boolean',
                label : 'Approved by Amin'
            }
        ].concat(options.addFields || []);
    }
};