angular.module('App').controller('userController', ['$scope', 'user', '$location', function($scope, user, $location){

    $scope.isSignedIn = function() {
        return user.isSignedIn();
    }

    $scope.loginUser = function (form) {
        console.log('cc');
        if (form.$valid) {
            user.login($scope.username, $scope.password);
            $location.path('/');
        } else {
            alert('Bitch !');
        };
    }

    $scope.logout = function() {
        user.logout();
    }
}])