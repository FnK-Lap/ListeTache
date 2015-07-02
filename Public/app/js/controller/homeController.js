app.controller('homeController', ['$scope', function($scope) {


    $scope.objects = [
        { status:'Important', title: 'Manette PS4', name:'lucas Blanqui', name:'Lucas blanqui', date:'3 Juin 2015 a 8h00', id: 1 },
        { status:'Normal', title: 'Manette PS4', name:'lucas Blanqui', name:'Lucas blanqui', date:'3 Juin 2015 a 8h00', id: 1 },

    ];
     console.log($scope.objects);

}]);