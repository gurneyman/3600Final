angular.module('brovyn')
  .service('cart', function(albums) {
    var default_cover_url = "http://placehold.it/150x150";

    var albums = {};


    this.all = function() {
      return albums;
    };

    this.removeItem = function( name ) {
      delete this.albums[name];
    };


    function album(name, artist, price, cover_url) {
      if(!cover_url) {
        cover_url = default_cover_url;
      }
      return {
        name : name,
        artist : artist,
        price : price,
        cover_url : cover_url
      };
    }
  
  });