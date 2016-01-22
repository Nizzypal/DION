'use strict'

angular.module('app').directive('dionNannyNavbar', function(){
        return {
            restrict: 'AE',
            templateUrl: 'app/views/templates/nanny-navbar.tpl.html',
            replace: true,
            scope: {},
            controller: function($scope, $stateParams, $state, $http, API_URL){
                
                $scope.goTo = function(option){
                    if (option == 'basicInfo'){
                         $state.go("nannyBasicinfo");
                    }
                }
            },
            link: function($scope, $element, $attrs, $controller){
                 
            }
        };

});
