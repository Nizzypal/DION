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
    //url: '/',
    url: '/main',
    templateUrl: '/views/main.html',
    //templateUrl: '/views/login.html',
    controller: 'MainCtrl'
  });

  $stateProvider.state('forgot', {
    //url: '/',
    url: '/forgot',
    templateUrl: '/views/forgot.html',
    //templateUrl: '/views/login.html',
    controller: 'ForgotCtrl'
  });

  $stateProvider.state('contactUs', {
    //url: '/',
    url: '/contact',
    templateUrl: '/views/contact.html',
    //templateUrl: '/views/login.html',
    controller: 'ContactCtrl'
  });

  $stateProvider.state('generalSignUp', {
    //url: '/',
    url: '/general-sign-up',
    templateUrl: '/views/general-sign-up.html',
    //templateUrl: '/views/login.html',
    controller: 'generalSignUpCtrl'
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

    $stateProvider.state('mommyBasicinfo2', {
    url: '/mommy-basicinfo-2',
    templateUrl: '/views/mommy-basicinfo-2.html',
    controller: 'MommyBasicInfoCtrl'
  });

  $stateProvider.state('nannyDashboard', {
    url: '/nanny-dashboard',
    templateUrl: '/views/nanny-dashboard.html',
    controller: 'NannyDashboardCtrl'
  });

  //   $stateProvider.state('login', {
  //   url: '/login',
  //   templateUrl: '/views/login.html',
  //   controller: 'LoginCtrl'
  // });    

 $stateProvider.state('temp', {
    url: '/',
    templateUrl: '/views/templates/temp.html'
  });


  $urlRouterProvider.otherwise('/');

});

// angular.module('app').controller('mainCtrl',
// 	function($scope){
// 		$scope.myVar = "Hello Angular";
// 	});

//constants
angular.module('app').constant('API_URL', 'http://localhost:3030/')