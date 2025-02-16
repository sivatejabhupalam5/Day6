angular.module('onlineShopping', ['ngRoute', 'authModule', 'productModule'])
.service('AuthService', AuthService)
.service('ProductService', ProductService)
.controller('ProductController', ProductController)
.controller('AuthController', AuthController)
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/auth', {
                templateUrl: 'views/login.html',
                controller: 'AuthController',
                controllerAs: 'authCtrl'
            })
            .when('/productcatalog', {
                templateUrl: 'views/getproduct.html',
                controller: 'ProductController',
                controllerAs: 'productCtrl'
            })
            .when('/shoppingcart', {
                templateUrl: 'views/addshoppingcart.html',
                controller: 'ShoppingCartController',
                controllerAs: 'shoppingCartCtrl'
            })
            .otherwise({
                redirectTo: '/auth'
            });
    }]);