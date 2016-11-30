/**
 * Created by guminji on 16/11/28.
 */
var app = require('../controller');
app.directive('footPage',function(){
    return {
        restrict:'EA',
        template:"<div ng-click='changePage()'>"+
                    "<ul>" +
                        "<li ng-repeat='item in pageNum'>{{item}}</li>" +
                    "</ul>"+
                "</div>",
        scope:{
            pageNum:'='
        },
        controller:['$scope',function($scope){
            $scope.changePage = function(){
                console.log(1);
                $scope.pageNum += 1;
            }
        }],
        link:function(){

        }

    }
})