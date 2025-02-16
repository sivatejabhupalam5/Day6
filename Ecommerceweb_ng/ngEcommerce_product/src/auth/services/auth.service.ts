import * as angular from 'angular';
import{authModule} from '../auth.module';

export class AuthService {
    static $inject = ['$q'];

    constructor(private $q: angular.IQService) {}

    validateUser(user: { emailid: string; password: string }): angular.IPromise<{ message: string }> {
        const deferred = this.$q.defer<{ message: string }>();

        // Mocking a backend call with a timeout
        setTimeout(() => {
            const validCredentials = [
                { emailid: 'prachi@gmail.com', password: '123456' },
                { emailid: 'prachimankar.2@gmail.com', password: '12356' },
                { emailid: 'user1@example.com', password: 'password123' },
                { emailid: 'user2@example.com', password: 'password456' },
                { emailid: 'user3@example.com', password: 'password789' }
            ];

            const isValid = validCredentials.some(cred => cred.emailid === user.emailid && cred.password === user.password);

            if (isValid) {
                deferred.resolve({ message: 'Login successful' });
            } else {
                deferred.reject({ message: 'Invalid credentials' });
            }
        }, 1000);

        return deferred.promise;
    }
}

authModule.service('AuthService', AuthService);