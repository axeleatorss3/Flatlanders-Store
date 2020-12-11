(function () {
   let app = angular.module('fsStore', [
        /* 1. Main App Module */
        'ui.router',
        'ui.router.state.events',
        'landing'
        
    ]);

    app.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider){
        $stateProvider.state('landing',{
            url: '/landing',
            templateUrl: 'partials/landing.html',
            controller: 'landing'
        });

        $urlRouterProvider.otherwise('landing');
        $locationProvider.html5Mode(false);
    }]);

})();