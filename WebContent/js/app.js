'use strict';
	var App = angular.module("ResumeApp", [
	                                       'ngMaterial',
	                                       'ngAnimate',
	                                      // 'ngCookies',
	                                      // 'ngResource',
	                                       'ngRoute',
	                                       //'ngSanitize',
	                                       //'ngTouch',
	                                       'ngMdIcons'


	                                     ]);
	
	
	App.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : "views/home.html",
	        controller: "homeCtrl"
	    })
	    .when("/home", {
	        templateUrl : "views/home.html",
	        controller: "homeCtrl"
	    })

	    .when("/about", {
	        templateUrl : "views/about.html",
	        controller: "aboutCtrl"
	    })
	    .otherwise({
	    	redirectTo: "/about"
	    })

	    ;
	});

	
	//App.controller("AppCtrl", function($scope) {
	App.controller('AppCtrl', ['$scope', '$mdSidenav', '$timeout','$log', '$location',function($scope, $mdSidenav, $timeout, $log,$location){
		  
	    var allMuppets = [];
	  
	  $scope.selected = null;
	  $scope.muppets = allMuppets;
	  $scope.selectMuppet = selectMuppet;
	  $scope.muppets = [{
	      name: 'Home',
	      iconurl: 'https://lh3.googleusercontent.com/-KGsfSssKoEU/AAAAAAAAAAI/AAAAAAAAAC4/j_0iL_6y3dE/s96-c-k-no/photo.jpg',
	      //iconurl: 'images/homeIcon.svg',
	      imgurl: 'http://muppethub.com/wp-content/uploads/2014/02/Animal-7.png',
	      content: 'home'
	  },  {
	      name: 'About',
	      iconurl: 'https://lh3.googleusercontent.com/-KGsfSssKoEU/AAAAAAAAAAI/AAAAAAAAAC4/j_0iL_6y3dE/s96-c-k-no/photo.jpg',
	      //iconurl: 'images/aboutIcon.png',
	      imgurl: 'http://bakadesuyo.bakadesuyo.netdna-cdn.com/wp-content/uploads/2013/12/ways-to-increase-willpower.jpg',
	      content: 'about'
	  }];
	  
	  

	  $scope.toggleSidenav = function(menuId) {
	    $mdSidenav(menuId).toggle();
	  };

	    function selectMuppet(muppet) {
	      console.log('Nav View selected:'+muppet.content);
	     
	    $scope.selected = angular.isNumber(muppet) ? $scope.muppets[muppet] : muppet;
	    //$route="#/"+ muppet.content;
	     $location.path("/"+muppet.content);
	    $scope.toggleSidenav('left');
	  }

	    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }
	 
	}]);
	
	
	
	