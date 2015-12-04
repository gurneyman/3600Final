angular.module('brovyn')
.controller('cartCtrl', function( $scope, albums ){
  // CONTROLLER STUFF HERE
  $scope.message = "Cart Page!!";
  $scope.albums = albums.all();
});