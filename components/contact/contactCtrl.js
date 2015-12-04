angular.module('brovyn')
.controller('contactCtrl', function( $scope ){
  // CONTROLLER STUFF HERE
  $scope.message = "Contact Page!!";
  $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
});