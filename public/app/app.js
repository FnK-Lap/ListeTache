var App = angular.module('App', [
    'ngRoute',
    'LocalStorageModule',
]);

App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'template/home.html',
                controller: 'homeController'
            }).
            when('/login', {
                templateUrl: 'template/login.html',
                controller: 'userController'
            }).
            when('/logout', {
                templateUrl: 'template/logout.html',
                controller: 'userController'
            }).
            when('/register', {
                templateUrl: 'template/register.html',
                controller: 'userController'
            }).
            otherwise({
                redirectTo: '/'
            })
    }
]).run(function($rootScope, localStorageService, $location, user) {
    console.log('run');
    $rootScope.$on('$routeChangeStart', function(event) {
        if ($location.path() === '/login' && user.isSignedIn()) {
            $location.path('/');
        } else if ($location.path() !== '/login' && !user.isSignedIn()) {
            $location.path('/login');
        };
    });
})

App.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('ListeTache');
});