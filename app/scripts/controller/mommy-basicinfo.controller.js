'use strict';
angular.module('app').controller('MommyBasicInfoCtrl', function($scope, $state, $http, UserDataService, API_URL){
	var vm = this;

  $scope.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  $scope.dayObjectArray = [
    {
      name: 'Sun',
      selected: false,
      timePeriods: [
        {
          period: 'Early Morning',
          selected: false
        },
        {
          period: 'Late Morning',
          selected: false
        },
        {
          period: 'Early Afternoon',
          selected: false
        },
        {
          period: 'Late Afternoon',
          selected: false
        },
        {
          period: 'Early Evening',
          selected: false
        },
        {
          period: 'Late Evening',
          selected: false
        },
        {
          period: 'Overnight',
          selected: false
        }                                        
      ]
    },
    {
      name: 'Mon',
      selected: false,
      timePeriods: [
        {
          period: 'Early Morning',
          selected: false
        },
        {
          period: 'Late Morning',
          selected: false
        },
        {
          period: 'Early Afternoon',
          selected: false
        },
        {
          period: 'Late Afternoon',
          selected: false
        },
        {
          period: 'Early Evening',
          selected: false
        },
        {
          period: 'Late Evening',
          selected: false
        },
        {
          period: 'Overnight',
          selected: false
        }                                        
      ]
    },
    {
      name: 'Tue',
      selected: false,
      timePeriods: [
        {
          period: 'Early Morning',
          selected: false
        },
        {
          period: 'Late Morning',
          selected: false
        },
        {
          period: 'Early Afternoon',
          selected: false
        },
        {
          period: 'Late Afternoon',
          selected: false
        },
        {
          period: 'Early Evening',
          selected: false
        },
        {
          period: 'Late Evening',
          selected: false
        },
        {
          period: 'Overnight',
          selected: false
        }                                        
      ]
    },    
    {
      name: 'Wed',
      selected: false,
      timePeriods: [
        {
          period: 'Early Morning',
          selected: false
        },
        {
          period: 'Late Morning',
          selected: false
        },
        {
          period: 'Early Afternoon',
          selected: false
        },
        {
          period: 'Late Afternoon',
          selected: false
        },
        {
          period: 'Early Evening',
          selected: false
        },
        {
          period: 'Late Evening',
          selected: false
        },
        {
          period: 'Overnight',
          selected: false
        }                                        
      ]
    },    
    {
      name: 'Thu',
      selected: false,
      timePeriods: [
        {
          period: 'Early Morning',
          selected: false
        },
        {
          period: 'Late Morning',
          selected: false
        },
        {
          period: 'Early Afternoon',
          selected: false
        },
        {
          period: 'Late Afternoon',
          selected: false
        },
        {
          period: 'Early Evening',
          selected: false
        },
        {
          period: 'Late Evening',
          selected: false
        },
        {
          period: 'Overnight',
          selected: false
        }                                        
      ]
    }, 
    {
      name: 'Fri',
      selected: false,
      timePeriods: [
        {
          period: 'Early Morning',
          selected: false
        },
        {
          period: 'Late Morning',
          selected: false
        },
        {
          period: 'Early Afternoon',
          selected: false
        },
        {
          period: 'Late Afternoon',
          selected: false
        },
        {
          period: 'Early Evening',
          selected: false
        },
        {
          period: 'Late Evening',
          selected: false
        },
        {
          period: 'Overnight',
          selected: false
        }                                        
      ]
    },    
    {
      name: 'Sat',
      selected: false,
      timePeriods: [
        {
          period: 'Early Morning',
          selected: false
        },
        {
          period: 'Late Morning',
          selected: false
        },
        {
          period: 'Early Afternoon',
          selected: false
        },
        {
          period: 'Late Afternoon',
          selected: false
        },
        {
          period: 'Early Evening',
          selected: false
        },
        {
          period: 'Late Evening',
          selected: false
        },
        {
          period: 'Overnight',
          selected: false
        }                                        
      ]
    }    
  ];

  //ui tracks by id, saved data is text
	$scope.careSeekerData = {
	    availableOptions: [
		    {
		    	id: '1',
		    	text: 'Child Care'
		    }, 
		    {
		    	id: '2',
		    	text: 'Elderly Care'	    	
		    }
	    ],
	    selectedOption: {
		    	id: '1',
		    	text: 'Child Care'
		 },
		 childrenNo: 2,
		 specialNeeds: "false",
     schedule: "regular",
		 careFrequency: "fulltime",
		 dateFlexible: "asap"
    };

  $scope.serviceCheck = function(){
  	if ($scope.careSeekerData.selectedOption.id == 1){
  		//$('#child-details').show();
      $('#child-repeater').show();
      $('#elderly-repeater').hide();
  	}
  	else {
      //$('#child-details').hide(); 
      $('#child-repeater').hide();
      $('#elderly-repeater').show();
    }
  };

  $scope.chechRadio = function(value){

  };

	$scope.specialNeedsCheck = function(){
		if ($scope.careSeekerData.specialNeeds == "true"){
			$('#child-specialNeed').show();
		} else $('#child-specialNeed').hide();

	};

	$scope.urgencyChange = function(){
		if ($scope.careSeekerData.dateFlexible == "asap"){

		}
	};

	$scope.getNoChildren = function(childrenNo){
		return new Array(childrenNo);
	};

  $scope.clickContinue = function(stateNo){

    $scope.user

    //save user data
    $http.post(API_URL + 'register', $scope.user)
      .success(function(newMember){
          //save uer data
          UserDataService.setUserInfo($scope.user);
      
          //goto next appropriate state
      if (user.type == 'caregiver'){
        $state.go('nannyBasicinfo');
      }else $state.go('mommyBasicinfo');        
    })
      .error(function(err){
          alert('warning: ' + err.message);  
          return false;
      });     


    if (stateNo == 2){
      $state.go("mommyBasicinfo2");   
    }
  };



	//Datepicker
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };

  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };	

});