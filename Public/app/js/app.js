var app = angular.module('app',[
    'ngRoute',
    'ui.bootstrap',
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            }).
            when('/login', {
                templateUrl: 'templates/users/login.html',
                controller: 'loginController'
            }).
            when('/addtask', {
                templateUrl: 'templates/users/addtask.html',
                controller: 'addtaskController'
            }).
            when('/addlist', {
                templateUrl: 'templates/users/addlist.html',
                controller: 'addlistController'
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


