'use strict'

angular.module('app').directive('login', function(){
        return {
            restrict: 'AE',
            templateUrl: 'app/views/templates/login.tpl.html',
            replace: true,
            scope: {},
            controller: function($scope, $state, $uibModal, API_URL, UserDataService){

                $scope.open = function () {
                    
                    var modalInstance = $uibModal.open({
                        templateUrl : '/views/login-modal.html',
                        //controllerAs : 'widget',
                        controller : 'LoginCtrl',
                        backdrop : 'static',
                        size : 'sm'
                    });
                
                    modalInstance.result.then(function (loginInfo) {
                        UserDataService.setUserInfo(loginInfo);

                        //$state.go("nannyBasicinfo");

                    }, function () {
                      console.log('Modal dismissed');
                    });

                };

                $scope.signup = function(){
                    $state.go("generalSignUp");
                }

            },
            link: function($scope, $element, $attrs, $controller){
                 
            }
        };

});