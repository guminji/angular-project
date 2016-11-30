/**
 * Created by guminji on 16/11/25.
 */
var app = require('../controller');
app.directive('myNav',function(){
    return {
        restrict:'EA',
        scope:{
            navList:'=navList'
        },
        replace:true,
        template:'<div ng-click="test()" style="height:50px;background:red;">' +
                    '<nav>' +
                    '<li ng-repeat="a in navList">{{a}}</li>'+
                    '</nav>'+
                    '</div>',

        controller:['$scope',function($scope){
            $scope.test = function(){
                console.log($scope.navList);
                alert($scope.navList);
                //$scope.navList = {
                //    a:1,
                //    b:2
                //}
            }

            //$scope.navList = {
            //  a:1,b:2,c:3
            //}
        }]
    }

})