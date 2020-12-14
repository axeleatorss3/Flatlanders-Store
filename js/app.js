(function () {
    let app = angular.module('fsStore', [
        /* 1. Main App Module */
        'ui.router',
        'ui.router.state.events',
        'landing',
        'navbar',
        'footer',
        'app',
        'products'
    ]);

    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider.state('landing', {
                url: '/landing',
                templateUrl: 'partials/landing.html',
                controller: 'landing'
            })
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'partials/main-panel.html',
                controller: 'App'
            })
            .state('app.products', {
                url: '/products',
                views: {
                    'content': {
                        templateUrl: 'partials/products/products.html',
                        controller: 'Products'
                    }
                }
            });

        $urlRouterProvider.otherwise('landing');
        $locationProvider.html5Mode(false);
    }]);
})();