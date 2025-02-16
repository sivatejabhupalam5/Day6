angular.module('onlineShopping', ['ngRoute', 'authModule', 'productModule'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/auth', {
            templateUrl: 'views/login.html',
            controller: 'authController',
            controllerAs: 'authController'
        })
        .when('/productcatalog', {
            templateUrl: 'views/getproduct.html',
            controller: 'productController',
            controllerAs: 'ProductController'
        })
        .otherwise({
            redirectTo: '/auth'
        });
}]);