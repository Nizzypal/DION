'use strict';
angular.module('app').controller('ContactCtrl', function($scope, API_URL, UserDataService){
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

	$scope.send = function(){
		UserDataService.setUserInfo(user);
	}

 //    $scope.goRegister = function(unit) {
 //      $state.go("registration");   
 //    }	
});