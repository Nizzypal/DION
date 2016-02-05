'use strict';
angular.module('app').controller('ForgotCtrl', function($scope, $state, API_URL){
	var vm = this;

	var user = {
		firstname:'',
		middlename:'',
		lastname:'',
		address:'',
		number:'',
		email:'',
		subject:'',
		message:''
	};
	
	$scope.user = user;

	$scope.home = function(){
		$state.go('main');
	}

});