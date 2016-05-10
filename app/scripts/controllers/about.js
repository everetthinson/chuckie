'use strict';

/**
 * @ngdoc function
 * @name chuckieApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the chuckieApp
 */
angular.module('chuckieApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
