'use strict';
angular.module('app').controller('generalSignUpCtrl', function($scope, $state, $http, API_URL){
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

		//user is new and must register	
	    $http.post(API_URL + 'register', $scope.user)
		    .success(function(newMember){
		        //userDataService.setUserInfo({userID: newMember.user._id, userName: newMember.user.email});
		    	$state.go('main');
		    })
		    .error(function(err){
		        alert('warning: ' + err.message);  
		        return false;
		    });	
	}

	vm.submit = function(){
		//alert('user - ' + user.email);

		$scope.user.name = $scope.firstName + " " + $scope.lastName;

		//user is alrady a member
	    if ($scope.isLogin === true){
		    //$http.post(API_URL + 'login', user)
		    $http.post(API_URL + 'login', $scope.user)
		        .success(function(res){

		        	//Set user service information
		        	userDataService.setUserInfo({userID: res.user._id, userName: res.user.email});

		        	$state.go('main', {'userName': res.user.email});
		        })
		        .error(function(err){
		            alert('warning: ' + err.message);

		            //if credentials are wrong, it means user has to register first
		            //$state.go('registration', {isLogin: false});     
		            
		            return false;
		        });		    	
			        
		} else if ($scope.isLogin === false){
		    	
		//user edits information
		} else {
			alert();
		    $http.post(API_URL + 'editUser', $scope.user)
		        .success(function(){
		            userDataService.setUserInfo({userID: $scope.user._id, userName: $scope.user.email});
		        	$state.go('main', {'userName': $scope.user.email});
		        })
		        .error(function(err){
		            alert('warning: ' + err.message);  
		            return false;
		        });			    		
		}
	};		

});