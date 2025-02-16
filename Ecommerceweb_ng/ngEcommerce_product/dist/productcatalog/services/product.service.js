angular.module('productModule').service('productService', function() {
    var products = [
        { id: 1, name: 'lily', price: 100, image: './imagetemplates/lily.jpg' },
        { id: 2, name: 'rose', price: 200, image: './imagetemplates/rose.webp' },
        { id: 3, name: 'jasmine', price: 300, image: './imagetemplates/jasmins.webp' }
    ];

    this.getProducts = function() {
        return products;
    };

    this.addProduct = function(product) {
        products.push(product);
    };
});