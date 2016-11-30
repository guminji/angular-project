/**
 * Created by guminji on 2016/11/10 0010.
 */
var angular = require('angular');
var app = angular.module('app',[]);
app.controller('test',['$scope','native',function($scope,native){
    $scope.showMessage ='胡小燕 傻乎乎！';
    $scope.showPage =function(){
        native.showPage($scope.showMessage);
        $scope.pageNum=[1,2,3,4];
    };
    $scope.navList = {
        a:1,
        b:2,
        c:3
    }
    $scope.pageNum=[1,2,3,4,5];
}])
module.exports = app;
