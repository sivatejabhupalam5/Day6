angular.module('productModule').controller('productController', ['$scope', 'productService', function($scope, productService) {
    $scope.products = productService.getProducts();
    $scope.cart = [];

    $scope.addToCart = function(product) {
        $scope.cart.push(product);
    };

    // $scope.addProduct = function() {
    //     var reader = new FileReader();
    //     productService.addProduct({
    //         id: $scope.products.length + 1,
    //         name: $scope.newProduct.name,
    //         price: $scope.newProduct.price,
    //         image: $scope.newProduct.image
    //     });
    //     $scope.newProduct = { id: 0, name: '', price: 0, image: '' };
    // };
    $scope.addProduct = function() {
        var reader = new FileReader();
        reader.onload = function(e) {
            $scope.$apply(function() {
                $scope.newProduct.image = e.target.result;
                productService.addProduct({
                    id: $scope.products.length + 1,
                    name: $scope.newProduct.name,
                    price: $scope.newProduct.price,
                    image: $scope.newProduct.image
                });
                $scope.newProduct = { id: 0, name: '', price: 0, image: '' };
            });
        };
        reader.readAsDataURL(document.getElementById('productImage').files[0]);
    };
    $scope.removeFromCart = function(product) {
        var index = $scope.cart.indexOf(product);
        if (index > -1) {
            $scope.cart.splice(index, 1);
        }
    };

    $scope.getTotal = function() {
        return $scope.cart.reduce(function(total, product) {
            return total + product.price;
        }, 0);
    };
}]);