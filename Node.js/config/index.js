var configValues = require('./config');
module.exports = {
    getDbConnectionString: function() {
        var retString='mongodb://'
        if(configValues.uname){
            retString=retString+configValues.uname;
            if(configValues.pwd){
                retString=retString + ':' + configValues.pwd;
            }
            retString=retString + '@'
        }
        retString=retString+configValues.hostname;

        if(configValues.port){
            retString=retString + ':' + configValues.port;
        }

        retString=retString + '/' + configValues.dbName;
        return retString; 
    }
}