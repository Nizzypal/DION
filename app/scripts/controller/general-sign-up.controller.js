'use strict';
angular.module('app').controller('generalSignUpCtrl', function($scope, $state, API_URL){
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

	$scope.Contiue = function(){

		if (user.type == 'caregiver'){
			$state.go('mommyBasicinfo');
		} else $state.go('nannyBasicinfo');

	}

});