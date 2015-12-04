angular.module('brovyn')
  .config(function($routeProvider){

    // ROUTES
    $routeProvider
      .when("/",
        {
          templateUrl: "./components/home/home.html",
          controller: "cartCtrl",
          controllerAs: "ctrl"
        }
      )
      .when("/About",
        {
          templateUrl: "./components/about/about.html",
          controller: "aboutCtrl",
          controllerAs: "ctrl"
        }
      )
      .when("/Album/:albumName",
        {
          templateUrl: "./components/album/album.html",
          controller: "albumCtrl",
          controllerAs: "ctrl"
        }
      )
      .when("/Cart",
        {
          templateUrl: "./components/cart/cart.html",
          controller: "cartCtrl",
          controllerAs: "ctrl"
        }
      )
      .when("/Contact",
        {
          templateUrl: "./components/contact/contact.html",
          controller: "contactCtrl",
          controllerAs: "ctrl"
        }
      )
      .otherwise('/');
  });