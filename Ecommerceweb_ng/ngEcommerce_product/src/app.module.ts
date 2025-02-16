import * as angular from 'angular';
import 'angular-route';
import { AuthService } from './auth/services/auth.service';
import { ProductService } from './productcatalog/services/product.service';
import { ProductController } from './productcatalog/controller/product.controller';
import { AuthController } from './auth/controller/auth.controller';

angular.module('onlineShopping', ['ngRoute', 'authModule', 'productModule'])
    .service('AuthService', AuthService)
    .service('ProductService', ProductService)
    .controller('ProductController', ProductController)
    .controller('AuthController', AuthController)
    .config(['$routeProvider', function($routeProvider: any) {
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