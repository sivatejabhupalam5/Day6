
var ProductController = /** @class */ (function () {
    function ProductController($scope, productService) {
        this.$scope = $scope;
        this.productService = productService;
        this.products = this.productService.getProducts();
        this.$scope.products = this.products;
        this.$scope.addToCart = this.addToCart.bind(this);
        this.$scope.increaseQuantity = this.increaseQuantity.bind(this);
        this.$scope.decreaseQuantity = this.decreaseQuantity.bind(this);
    }
    ProductController.prototype.addToCart = function (product) {
        // Implement the logic to add the product to the cart
        console.log('Product added to cart:', product);
    };
    ProductController.prototype.increaseQuantity = function (product) {
        product.quantity++;
    };
    ProductController.prototype.decreaseQuantity = function (product) {
        if (product.quantity > 1) {
            product.quantity--;
        }
    };
    ProductController.$inject = ['$scope', 'productService'];
    return ProductController;
}());
angular.module('productModule').controller('productController', ProductController);
