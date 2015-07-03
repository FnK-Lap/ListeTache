app.controller('addtaskController', ['$scope', 'serverData', function($scope, serverData) {

    $scope.addTask = function(form) {
        if (form.$valid) {
            serverData.post('/api/list/:_id/tasks', $scope.content)
                .success(function (data) {
                    $scope.content= '';
                    console.log(data);
                });
        }
        else {
            console.log('echec ajout tache');
        }
    };



}]);
