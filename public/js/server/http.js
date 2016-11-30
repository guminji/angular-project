/**
 * Created by guminji on 16/11/29.
 */
var app = require('../controller');
app.factory('appHttp',function($http){
    var http = {};
    http.send=function(option){

        $http.get()
    }
    http.get=function(){


    }
    return http;
})