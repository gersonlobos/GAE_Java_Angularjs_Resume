'use strict';

/**
 * @ngdoc function
 * @name ResumeApp.controller:aboutCtrl
 * @description
 * # homeCtrl
 * Controller of the ResumeApp
 */


angular.module('ResumeApp')
  .controller('aboutCtrl', function ($scope, $mdDialog) {
    $scope.awesomeThings = [
      'gerson',
      'enrique',
      'lobos',
      'aguilar'
    ];

    $scope.imagePath = 'img/washedout.png';
    $scope.map = {
                        center: {
                                latitude: 56.162939,
                                longitude: 10.203921
                        },
                        zoom: 8
                };


  $scope.showTabDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'tabDialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
  };

    function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }  
  })
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});