'use strict';
angular.module('app').controller('AboutCtrl', function($scope, $state, API_URL){
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

	$scope.toggle = function(event, id){
 		$(id).collapse('toggle');

 		//var iconElement = $('div').find('span.glyphicon');
 		var iconElement = $(event.currentTarget);

 		if ($(iconElement).hasClass('glyphicon-plus')){
 			$(iconElement).removeClass('glyphicon-plus');
 			$(iconElement).addClass('glyphicon-minus');
 		} else {
 			$(iconElement).removeClass('glyphicon-minus');
 			$(iconElement).addClass('glyphicon-plus');
 		}
	}

});