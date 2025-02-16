angular.module('authModule').service('authService', ['$q', function($q) {
    this.validateUser = function(user) {
        var deferred = $q.defer();

        // Mocking a backend call with a timeout
        setTimeout(function() {
            var validCredentials = [
                { emailid: 'prachi@gmail.com', password: '123456' },
                { emailid: 'prachimankar.2@gmail.com', password: '12356' },
                { emailid: 'user1@example.com', password: 'password123' },
                { emailid: 'user2@example.com', password: 'password456' },
                { emailid: 'user3@example.com', password: 'password789' }
            ];

            var isValid = validCredentials.some(function(cred) {
                return cred.emailid === user.emailid && cred.password === user.password;
            });

            if (isValid) {
                deferred.resolve({ message: 'Login successful' });
            } else {
                deferred.reject({ message: 'Invalid credentials' });
            }
        }, 1000);

        return deferred.promise;
    };
}]);