'use strict';
angular.module('app').controller('LogNannyCtrl', function($scope, API_URL){
	var vm = this;

	var user = {
		email:'',
		password:''
	};
	
	$scope.statusData = {
	    availableOptions: ['Single', 'Married'],

	    selectedOption: 'Single' //This sets the default value of the select in the ui
    };

	$scope.spouseDetailCheck = function(){
		if ($scope.statusData.selectedOption == 'Married'){
			$('#spouse-details').show();
		}
		else $('#spouse-details').hide(); 
	}

	$scope.nannyAchievements = {};
	$scope.nannyAchievements.nurse = false;
	$scope.nannyAchievements.teacher = false;
	$scope.nannyAchievements.socialworker = false;
	$scope.nannyAchievements.carfegiver = false;
	$scope.nannyAchievements.other = false;
	//$scope.userName = $stateParams.userName;
	//$scope.token = $stateParams.token;
	//$scope.userDataService= UserDataService;
	//$scope.userName = $scope.userDataService.getUserInfo().userName;

	// if ($scope.userName != null && $scope.userName != ''){
	// 	$rootScope.$broadcast('USER_DEFINED', { username: $scope.userName })
	// }

	// $scope.submit = vm.submit;

 //    $scope.goRegister = function(unit) {
 //      $state.go("registration");   
 //    }	
});