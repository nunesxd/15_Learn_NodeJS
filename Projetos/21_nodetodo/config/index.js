let configValues = require('./config.json');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://127.0.0.1:27017/nodetodosample';
        //`mongodb://${configValues.uname}:${configValues.pwd}@`;
    }
    
};