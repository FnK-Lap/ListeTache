var app = angular.module('app',[
    'ngRoute',
]);


app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            })

    }
]).run(function($rootScope){
    $rootScope.$on('$routeChangeStart', function(event){

        //var userData = localStorageService.get('user');
        //
        //if($location.path() !== '/user/login' && (userData === null || typeof(userData.username) === 'undefined')) {
        //    return $location.path('/user/login');
        //}
        //
        //if($location.path() === '/user/login' && userData !== null && typeof(userData.username) !== 'undefined') {
        //    event.preventDefault();
        //    return $location.path('/');
        //}
    });
});

