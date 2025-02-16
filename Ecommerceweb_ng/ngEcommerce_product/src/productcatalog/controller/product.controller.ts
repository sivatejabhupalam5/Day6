import * as angular from 'angular';
//import { productmodule } from '../product.module';

// interface IProduct {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
// }

// interface IProductScope extends angular.IScope {
//     products: IProduct[];
//     cart: IProduct[];
//     newProduct: IProduct;
//     addToCart: (product: IProduct) => void;
//     addProduct: () => void;
//     removeFromCart: (product: IProduct) => void;
//     getTotal: () => number;
// }

// export class ProductController {
//     static $inject = ['$scope', 'productService'];

//     constructor(private $scope: IProductScope, private productService: any) {
//         this.$scope.products = this.productService.getProducts();

//         this.$scope.cart = [];

//         this.$scope.addToCart = (product: IProduct) => {
//             this.$scope.cart.push(product);
//         };

//         this.$scope.addProduct = () => {
//             this.productService.addProduct({
//                 id: this.$scope.products.length + 1,
//                 name: this.$scope.newProduct.name,
//                 price: this.$scope.newProduct.price,
//                 image: this.$scope.newProduct.image
//             });
//             this.$scope.newProduct = { id: 0, name: '', price: 0, image: '' };
//         };

//         this.$scope.removeFromCart = (product: IProduct) => {
//             const index = this.$scope.cart.indexOf(product);
//             if (index > -1) {
//                 this.$scope.cart.splice(index, 1);
//             }
//         };

//         this.$scope.getTotal = () => {
//             return this.$scope.cart.reduce((total, product) => total + product.price, 0);
//         };
//     }
// }

// productmodule.controller('productController', ProductController);


import { IProductService, IProduct } from '../services/product.service';

interface IProductScope extends angular.IScope {
    products: IProduct[];
    addToCart: (product: IProduct) => void;
    increaseQuantity: (product: IProduct) => void;
    decreaseQuantity: (product: IProduct) => void;
}

export class ProductController {
    static $inject = ['$scope', 'productService'];
    products: IProduct[];

    constructor(private $scope: IProductScope, private productService: IProductService) {
        this.products = this.productService.getProducts();
        this.$scope.products = this.products;
        this.$scope.addToCart = this.addToCart.bind(this);
        this.$scope.increaseQuantity = this.increaseQuantity.bind(this);
        this.$scope.decreaseQuantity = this.decreaseQuantity.bind(this);
    }

    addToCart(product: IProduct): void {
        // Implement the logic to add the product to the cart
        console.log('Product added to cart:', product);
    }

    increaseQuantity(product: IProduct): void {
        product.quantity++;
    }

    decreaseQuantity(product: IProduct): void {
        if (product.quantity > 1) {
            product.quantity--;
        }
    }
}

angular.module('productModule').controller('productController', ProductController);