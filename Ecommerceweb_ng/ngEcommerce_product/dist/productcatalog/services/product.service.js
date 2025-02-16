
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        // Return the list of products
        return [
            { id: 1, name: 'lily', price: 100, image: './imagetemplates/rose.webp', quantity: 1 },
            { id: 2, name: 'rose', price: 200, image: './imagetemplates/rose.webp', quantity: 1 },
            { id: 3, name: 'jasmine', price: 300, image: './imagetemplates/jasmins.webp', quantity: 1 }
            // Add more products as needed
        ];
    };
    return ProductService;
}());
angular.module('productModule').service('productService', ProductService);
