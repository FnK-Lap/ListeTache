angular.module('App').factory('user', ['localStorageService', '$location', 'http', function(localStorageService, $location, http) {

    var userEntity = {
        username  : '',
        password  : '',
    };

    // Username
    userEntity.setUsername = function(username) {
        userEntity.username = username;
    }
    userEntity.getUsername = function() {
        return userEntity.username;
    }
    // Password
    userEntity.setPassword = function(password) {
        userEntity.password = password;
    }
    userEntity.getPassword = function() {
        return userEntity.password;
    }

    userEntity.login = function(username, password) {
        userEntity = {
            username: username,
            password: password,
        };

        http.post('/api/login', {username: username, password:password})
            .success(function(data) {

                console.log('success entity');
            })
            .error(function(data, cc, hey, yop) {
                console.log('error entity');
            });
        // localStorageService.set('user', userEntity);
    }

    userEntity.logout = function() {
        localStorageService.remove('user');
        userEntity = null;
        // console.log('logout');
        return $location.path('/user/login');
    }

    userEntity.isSignedIn = function() {
        var userData = localStorageService.get('user');
        if ((userData === null || typeof(userData.username) === 'undefined')) {
            console.log('user not logged');
            return false;
        };

        if (userData != null && typeof(userData.username) !== 'undefined') {
            userEntity = localStorageService.get('user');
            console.log('user logged');
            return true;
        };
    }

    return userEntity;
}])