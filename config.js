/**
 * Created by guminji on 2016/11/17 0017.
 */
var fs = require('fs');
var config=fs.readFileSync('config.json');
console.log(config);
console.log(JSON.parse(config));
module.exports = {
    config:JSON.parse(config),
    getEnv:function(){
        return this.get('Env');
    },
    get:function(protoptye){
        //console.log(this);
        //console.log(protoptye);
        //console.log(this.config[protoptye]);
        var a = this.config[protoptye];
        //console.log(a);
        return a;
    }
}