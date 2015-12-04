angular.module('brovyn')
  .service('albums', function() {
    var default_cover_url = "http://placehold.it/150x150";

    // This is a stupid way of doing this
    var albums = {};

    albums["master_of_puppets"] = album("Master of Puppets", "Metallica", 5.99, "https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg");
    albums["1000_forms_of_fear"] = album("1000 Forms Of Fear", "Sia", 5.99, "https://upload.wikimedia.org/wikipedia/en/b/b7/Sia_-_1000_Forms_of_Fear_%28Official_Album_Cover%29.png");
    albums["yeezus"] = album("Yeezus", "Kanye West", 5.99, "http://images.rapgenius.com/7a4d222fe114a84612c546abfe8f3a21.1000x1000x1.jpg");
    albums["purpose"] = album("Purpose", "Justin Bieber", 5.99, "http://cdn.defjam.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg");
    albums["lest_we_forget"] = album("Lest We Forget", "Marilyn Manson", 5.99, "https://upload.wikimedia.org/wikipedia/en/6/6b/Marilyn_Manson_-_Lest_We_Forget_cover.jpg");
    albums["antennas_to_hell"] = album("Antennas To Hell", "Slipknot", 5.99, "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/SlipknotAntennastoHell.jpg/220px-SlipknotAntennastoHell.jpg");
    albums["hooked_on_a_feeling"] = album("Hooked on a Feeling", "Blue Swede", 5.99, "https://upload.wikimedia.org/wikipedia/en/b/b8/Blue_Swede_-_Hooked_on_a_Feeling.jpeg");
    albums["dirt"] = album("Dirt", "Alice in Chains", 5.99, "http://www.rememberlayne.com/blog/wp-content/uploads/2009/01/96AliceInChains-1992-Dirt.jpg");
    albums["evil_empire"] = album("Evil Empire", "Rage Against the Machine", 5.99, "https://upload.wikimedia.org/wikipedia/en/4/45/Rage_Against_the_Machine_-_Evil_Empire.png");
    

    this.albums = albums;


    this.all = function() {
      return this.albums;
    };

    this.one = function( name ) {
      return this.albums[name];
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