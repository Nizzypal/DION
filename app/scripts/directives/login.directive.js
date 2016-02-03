'use strict'

angular.module('app').directive('login', function($uibModal, API_URL){
        return {
            restrict: 'AE',
            templateUrl: 'app/views/templates/login.tpl.html',
            replace: true,
            scope: {},
            controller: function($scope){
                
                $scope.open = function () {
                    var modalInstance = $uibModal.open({
                        templateUrl : '/views/login-modal.html',
                        //controllerAs : 'widget',
                        controller : 'LoginCtrl',
                        backdrop : 'static',
                        resolve : {
                        }
                    });
                }


                // $scope.goTo = function(option){
                //     if (option == 'basicInfo'){
                //          $state.go("nannyBasicinfo");
                //     }
                // }
            },
            link: function($scope, $element, $attrs, $controller){
                 
            }
        };

});