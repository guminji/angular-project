/**
 * Created by guminji on 2016/11/10 0010.
 */
var app = require('./controller.js');
app.factory('native',[function(){
    var native = {};
    native.showPage =function(show){
        alert(show);
    }
    return native;
}])