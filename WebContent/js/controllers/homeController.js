'use strict';

/**
 * @ngdoc function
 * @name ResumeApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the ResumeApp
 */
angular.module('ResumeApp')
  .controller('homeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'ngMaterial'
    ];
    
  });