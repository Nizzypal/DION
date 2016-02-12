// .directive("fileread", [function () {
//     return {
//         scope: {
//             fileread: "="
//         },
//         link: function (scope, element, attributes) {
//             element.bind("change", function (changeEvent) {
//                 var reader = new FileReader();
//                 reader.onload = function (loadEvent) {
//                     scope.$apply(function () {
//                         scope.fileread = loadEvent.target.result;
//                     });
//                 }
//                 reader.readAsDataURL(changeEvent.target.files[0]);
//             });
//         }
//     }
// }]);


    // function readURL(input) {
    //         if (input.files && input.files[0]) {
    //             var reader = new FileReader();

    //             reader.onload = function (e) {
    //                 $('#blah')
    //                     .attr('src', e.target.result)
    //                     .width(150)
    //                     .height(200);
    //             };

    //             reader.readAsDataURL(input.files[0]);
    //         }
    //     }

'use strict';
angular.module('app').directive('fileread', function(){
        return {
            restrict: 'AE',
            //template: "<div><input type='file' onchange='readURL(this);'/><img id='blah' src='#'' alt='your image' /></div>",
            replace: true,
            scope: {
                 fileread: "="
            },
            controller: function($scope, $state, $uibModal, API_URL, UserDataService){

                $scope.goto = function(destination) {
                    
                    if (destination == 'contactUs') $state.go('contactUs');
                };

            },
            link: function(scope, element, attrs){
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.fileread = loadEvent.target.result;
                            $('#blah')
                                .attr('src', loadEvent.target.result)
                                .width('100%')
                                .height('20vw');                            
                                });
                    }
                    reader.readAsDataURL(changeEvent.target.files[0]);
                });                 
            }
        };

});