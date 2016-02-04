'use strict';
angular.module('app').controller('LoginCtrl', function($scope, $uibModalInstance){
    var vm = this;

    var user = {
        email:'',
        password:'',
        remember: false
    };
    
  $scope.user = user;

  $scope.login = function () {
    $uibModalInstance.close($scope.user);
  };

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };


});

// angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

//   $scope.items = items;
//   $scope.selected = {
//     item: $scope.items[0]
//   };

//   $scope.ok = function () {
//     $uibModalInstance.close($scope.selected.item);
//   };

//   $scope.cancel = function () {
//     $uibModalInstance.dismiss('cancel');
//   };
// });


