
	var App = angular.module("ResumeApp", ["ngRoute"]);
	
	App.controller("HelloCtrl", function($scope) {
		$scope.name = "Gerson Lobos";
	});
	
	
	App.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : "views/home.html",
	        controller: "homeCtrl"
	    })

	    .when("/about", {
	        templateUrl : "views/about.html",
	        controller: "aboutCtrl"
	    });
	});
