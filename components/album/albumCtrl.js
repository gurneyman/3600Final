angular.module('brovyn')
.controller('albumCtrl', function( $scope, $routeParams, albums){
  // CONTROLLER STUFF HERE

  $scope.album = albums.one($routeParams.albumName);
  $scope.album.url = "./#/Album/" + $routeParams.albumName;
  $scope.params = $routeParams;
});