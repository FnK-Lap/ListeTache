app.controller('addlistController', ['$scope', 'serverData', function($scope, serverData) {

    $scope.addList = function(form) {
        if (form.$valid) {
            console.log($scope.title);
            serverData.post('api/lists', $scope.title)
                .success(function (data) {
                    $scope.title= '';
                    console.log(data);
                });
        }
        else {
            console.log('echec ajout list');
        }
    };



}]);
