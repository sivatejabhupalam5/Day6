var AuthController = /** @class */ (function () {
    function AuthController($scope, AuthService, $window) {
        var _this = this;
        this.$scope = $scope;
        this.AuthService = AuthService;
        this.$window = $window;
        this.$scope.user = {};
        this.$scope.onValidate = function () {
            if (_this.$scope.loginForm.$valid) {
                _this.AuthService.validateUser(_this.$scope.user).then(function () {
                    // Handle successful login
                    document.getElementById('validation-message').innerText = 'Login successful!';
                    _this.$window.location.href = '#!/productcatalog'; // Navigate to the product list page
                }, function () {
                    // Handle login error
                    document.getElementById('validation-message').innerText = 'Invalid credentials!';
                });
            }
            else {
                document.getElementById('validation-message').innerText = 'Please fill in all required fields.';
            }
        };
    }
    AuthController.$inject = ['$scope', 'AuthService', '$window'];
    return AuthController;
}());

angular.module('authModule', []).controller('AuthController', AuthController);