'use strict';

/**
 * @ngdoc function
 * @name projetNodeJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetNodeJsApp
 */
angular.module('projetNodeJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
