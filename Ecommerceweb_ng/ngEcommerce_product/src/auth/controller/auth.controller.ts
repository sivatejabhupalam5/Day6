import angular from 'angular';
import {authModule} from '../auth.module';

interface IAuthScope extends angular.IScope {
    user: any;
    onValidate: () => void;
    loginForm: any;
}

export class AuthController {
    static $inject = ['$scope', 'authservice', '$window','authmodule'];

    constructor(private $scope: IAuthScope, private authService: any, private $window: angular.IWindowService) {
        this.$scope.user = {};

        this.$scope.onValidate = () => {
            if (this.$scope.loginForm.$valid) {
                this.authService.validateUser(this.$scope.user).then(() => {
                    // Handle successful login
                    document.getElementById('validation-message')!.innerText = 'Login successful!';
                    this.$window.location.href = '#!/productcatalog'; // Navigate to the product list page
                }, () => {
                    // Handle login error
                    document.getElementById('validation-message')!.innerText = 'Invalid credentials!';
                });
            } else {
                document.getElementById('validation-message')!.innerText = 'Please fill in all required fields.';
            }
        };
    }
}

authModule.controller('AuthController', AuthController);
  