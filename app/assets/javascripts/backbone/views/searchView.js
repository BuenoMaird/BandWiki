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
    SC.get('/tracks', {q: searchTerm, license: 'cc-by-sa'}, function(tracks){
      SC.oEmbed(tracks[1].uri, {auto_play: true}, document.getElementById('player'));
      debugger

    });
  }

});