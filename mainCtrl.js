angular.module('brovyn')
.controller('mainCtrl', function( $scope, $window ){
  // CONTROLLER STUFF HERE
  $scope.showMenu = false;

  function closeMenu() {
    angular.element('.material-design-hamburger__icon--to-arrow').removeClass('.material-design-hamburger__icon--to-arrow').addClass('.material-design-hamburger__icon--from-arrow');
    $scope.showMenu = false;
  }
});