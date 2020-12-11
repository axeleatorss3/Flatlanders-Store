(function () {


    let app = angular.module('landing', [
        
    ]);
    app.controller('landing',['$scope','$state', function($scope,$state){
        console.log('rendering');
    }]);
}());