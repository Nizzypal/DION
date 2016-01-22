//angular.module('app', ['ngResource', 'ngRoute']);
angular.module('app', ['ui.router', 'ui.bootstrap']);

//angular.module('app').config(function( $routeProvider, $locationProvider, $stateProvider){
angular.module('app').config(function( $stateProvider, $urlRouterProvider){
	//$locationProvider.html5Mode(true);
	// $routeProvider
	// 	.when('/', {
	// 		templateUrl: '/partials/main',
	// 		controller: 'mainCtrl'
	// 	}); 

  $stateProvider.state('main', {
    url: '/',
    templateUrl: '/views/main.html',
    controller: 'MainCtrl'
  });

  $stateProvider.state('nannyBasicinfo', {
    url: '/nanny-basicinfo',
    templateUrl: '/views/nanny-basicinfo.html',
    controller: 'NannyBasicInfoCtrl'
  });

  $stateProvider.state('mommyBasicinfo', {
    url: '/mommy-basicinfo',
    templateUrl: '/views/mommy-basicinfo.html',
    controller: 'MommyBasicInfoCtrl'
  });

  $urlRouterProvider.otherwise('/');

});

// angular.module('app').controller('mainCtrl',
// 	function($scope){
// 		$scope.myVar = "Hello Angular";
// 	});

//constants
angular.module('app').constant('API_URL', 'http://localhost:3030/')