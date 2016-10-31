'use strict';

/**
 * @ngdoc function
 * @name ResumeApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the ResumeApp
 */
 /*
angular.module('ResumeApp')
  .controller('homeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'ngMaterial'
    ];
    
  });*/



  angular.module('ResumeApp')  /* ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'] */

.controller('homeCtrl', function($scope, $mdDialog) {
  
	  ga('create', 'UA-86552039-1', 'auto');
	  ga('send', 'pageview');






})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
 
});;


