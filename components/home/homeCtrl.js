angular.module('brovyn')
.controller('homeCtrl', function( $scope, albums ){
  // CONTROLLER STUFF HERE
  $scope.albums = albums.all();
});