'use strict';
angular.module('app').controller('ServicesCtrl', function($scope, $state, API_URL){
	var vm = this;

	var user = {
		type:'',
		firstname:'',
		middlename:'',
		lastname:'',
		email:'',
		password:'',
		location:'',
		agreeTerms: false
	};
	
	$scope.user = user;

});