import * as angular from 'angular';
import 'angular-route'; 
import {authModule} from './auth/auth.module';
import {productmodule} from './productcatalog/product.module';
import { shoppingcartmodule } from './shoppingcart/shoppingcart.module';
   


var app = angular.module('onlineShopping', ['ngRoute', authModule.name, productmodule.name,shoppingcartmodule.name]);

app.config(['$routeProvider', function($routeProvider:any) {
    $routeProvider
    .when('/auth', {
        templateUrl: 'views/login.html',  // Template for the home route
        controller: 'AuthController',  // Controller for the home route
        controllerAs: 'AuthController'  // Use 'homeCtrl' as alias for the controller instance
    })
    .when('/productcatalog', {
        templateUrl: 'views/getproduct.html',  // Template for the home route
        controller: 'productController',  // Controller for the home route
        controllerAs: 'productCtrl'  // Use 'homeCtrl' as alias for the controller instance
    })
    .when('/shoppingcart', {
        templateUrl: 'views/addshoppingcart.html',  // Template for the home route
        controller: 'shoppingcartcontroller',  // Controller for the home route
        controllerAs: 'shoppingcartCtrl'  // Use 'homeCtrl' as alias for the controller instance
    })
    .otherwise({
        redirectTo: '/auth'
    });
}]);
export default app;
