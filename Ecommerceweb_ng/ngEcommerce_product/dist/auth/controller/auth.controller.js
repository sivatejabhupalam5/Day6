angular.module('authModule').controller('authController', ['$scope', 'authService', '$window', function($scope, authService, $window) {
    $scope.user = {};

    $scope.onValidate = function() {
        if ($scope.loginForm.$valid) {
            authService.validateUser($scope.user).then(function() {
                // Handle successful login
                document.getElementById('validation-message').innerText = 'Login successful!';
                $window.location.href = '#!/productcatalog'; // Navigate to the product list page
            }, function() {
                // Handle login error
                document.getElementById('validation-message').innerText = 'Invalid credentials!';
            });
        } else {
            document.getElementById('validation-message').innerText = 'Please fill in all required fields.';
        }
    };
}]);