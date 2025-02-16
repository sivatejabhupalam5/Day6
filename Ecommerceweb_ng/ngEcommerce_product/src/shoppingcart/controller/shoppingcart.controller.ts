import * as angular from 'angular';
import {shoppingcartmodule} from '../shoppingcart.module';
export class shoppingcartController {
    static $inject = ['$scope'];
  message: string;
  
    constructor() {
      // Controller logic for Home
      this.message = 'Mentor As A Service';
    }
  }