app.controller('homeController', ['$scope', 'serverData', function($scope, serverData) {


     serverData.get('/api/lists')
         .success(function (data) {
            console.log(data);
            $scope.lists = data;

         });

    $scope.deleteTask = function(id) {

        serverData.delete('api/list/:_id/task/' +id)
            .success(function(data) {
               console.log(data);
           });
    };
}]);