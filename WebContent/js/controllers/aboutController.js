'use strict';

/**
 * @ngdoc function
 * @name ResumeApp.controller:aboutCtrl
 * @description
 * # homeCtrl
 * Controller of the ResumeApp
 */


angular.module('ResumeApp')
  .controller('aboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'gerson',
      'enrique',
      'lobos',
      'aguilar'
    ];

    $scope.imagePath = 'img/washedout.png';
    
  })
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});