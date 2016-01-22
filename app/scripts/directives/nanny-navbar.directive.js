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
                         $state.go("loginNanny");
                    }
                }

                //Get current user's name and check
                // $scope.username = UserDataService.getUserInfo().userName;
                // var == null - standard way of checking
                // if ($scope.username == null || $scope.username == '') {
                //     $scope.username = "Login"    
                // }

                // $scope.login = function(){

                //     //Check user name to know if login or registration will be done
                //     if ($scope.username === "Login" ){
                //         $state.go("login", {"isLogin": true});
                //     }
                //     // else {
                //     //     $state.go("registration", {"isLogin": "edit"});
                //     // }
                // };
            },
            link: function($scope, $element, $attrs, $controller){
                 
            }
        };

});
