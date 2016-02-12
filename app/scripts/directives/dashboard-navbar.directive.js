'use strict'

angular.module('app').directive('dashboardNavbar', function(){
        return {
            restrict: 'AE',
            templateUrl: 'app/views/templates/dashboard-navbar.tpl.html',
            replace: true,
            scope: {},
            controller: function($scope, $state, $uibModal, API_URL, UserDataService){

                $scope.goto = function(destination) {
                    
                    if (destination == 'contactUs') $state.go('contactUs');
                };

            },
            link: function($scope, $element, $attrs, $controller){
                 
            }
        };

});