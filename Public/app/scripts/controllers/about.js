'use strict';

/**
 * @ngdoc function
 * @name projetNodeJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projetNodeJsApp
 */
angular.module('projetNodeJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
