import * as angular from 'angular';


// interface IProduct {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
// }

// export class ProductService {
//     private products: IProduct[] = [
//         { id: 1, name: 'lily', price: 100, image: '.../imagetemplates/lily.jpg' },
//         { id: 2, name: 'rose', price: 200, image: 'rose.jpg' },
//         { id: 3, name: 'jasmine', price: 300, image: 'jasmine.jpg' }
//     ];

//     getProducts(): IProduct[] {
//         return this.products;
//     }

//     addProduct(product: IProduct): void {
//         this.products.push(product);
//     }
// }

// productmodule.service('productService', ProductService);
export interface IProduct {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export interface IProductService {
    getProducts(): IProduct[];
}

export class ProductService implements IProductService {
    getProducts(): IProduct[] {
        // Return the list of products
        return [
            { id: 1, name: 'lily', price: 100, image: '.../imagetemplates/lily.jpg', quantity: 1 },
            { id: 2, name: 'rose', price: 200, image: '.../imagetemplates/lily.jpg' , quantity: 1 },
            { id: 3, name: 'jasmine', price: 300, image: '.../imagetemplates/lily.jpg' , quantity: 1 }
            
            // Add more products as needed
        ];
    }
}

angular.module('productModule').service('productService', ProductService);