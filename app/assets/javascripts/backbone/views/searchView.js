var app = app || {}

app.SearchView = Backbone.View.extend({
  el: '#app',
  events: {
    'click #SCSearch': 'searchSoundCloud'
  },

  intialize: function (){
  },
  // Renders the searchView template onto the views div
  render: function(){
    console.log('view is rendering')
    var searchTemplate = $('#searchView').html()
    var searchHTML = _.template(searchTemplate)
    $('#search').append(searchHTML);
    console.log(searchHTML)
  },

  searchSoundCloud: function (e){
    var searchTerm = $('#searchItem').val()
    event.preventDefault();
    SC.get('/tracks', {q: searchTerm, license: 'cc-by-sa'},  function(tracks){
      console.log(tracks)
      for (var i = 0; i < tracks.length; i++) {
        SC.oEmbed(tracks[i].uri, {auto_play: false, maxheight: 81px}, document.getElementById('songList'));
        debugger
      };
    });
  }

});

      // SC.oEmbed(tracks[1].uri, {auto_play: true}, document.getElementById('player'));