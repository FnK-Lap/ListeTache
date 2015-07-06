angular.module('App').controller('homeController', ['$scope', 'user', '$location', 'http', '$route', function($scope, user, $location, http, $route){
    http.get('/api/lists')
        .success(function(data) {
            $scope.lists = data;
        })


    $scope.deleteList = function(id) {
        http.delete('/api/list/'+id)
            .success(function(data) {
                return $route.reload();
            })
    }

    $scope.addList = function(form) {
        if (form.$valid) {
            http.post('/api/lists', {title: $scope.title})
                .success(function(data) {
                    return $route.reload();
                })
        }
    }

    $scope.addTask = function(form, listId) {
        if (form.$valid) {
            http.post('/api/list/'+listId+'/tasks', {content: $scope.content})
                .success(function(data) {
                    return $route.reload();
                })
        };
    }

    $scope.deleteTask = function(listId, taskId) {
        http.delete('/api/list/'+listId+'/task/'+taskId)
            .success(function(data) {
                return $route.reload();
            })
    }

    $scope.doneTask = function(task) {
        task.done = true;
        http.put('/api/list/'+task.list+'/task/'+task._id, task)
            .success(function(data) {
                return $route.reload();
            })
    }

    $scope.followList = function(listId) {
        http.post('/api/list/'+listId+'/follow', {})
            .success(function(data) {
                return $route.reload();
            })
    }

    $scope.editList = function(form, list) {
        if (form.$valid) {  
            list.title = $scope.editTitle;
            http.put('/api/list/'+list._id, list)
                .success(function(data) {
                    return $route.reload();
                })
        };
    }

    $scope.editTask = function(form, task) {
        if (form.$valid) {  
            task.content = $scope.editContent;
            http.put('/api/list/'+task.list+'/task/'+task._id, task)
                .success(function(data) {
                    return $route.reload();
                })
        };
    }
}])