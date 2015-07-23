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
    var searchTemplate = $('#searchView').html();
    var searchHTML = _.template(searchTemplate);
    $('#search').append(searchHTML);
  },

  searchSoundCloud: function (e){
    $('#songList').html('');
    var searchTerm = $('#searchItem').val();
    var searchData = [];
    var page_size = 200;
    event.preventDefault();
    //Gets all the users based on the search term
    SC.get('/users', { client_id:'9fe36ec8f8911ba5b8afa911f2cc7ef6',
                        license: 'cc-by-sa',
                        q: searchTerm,
                        limit: page_size,
                        // linked_partitioning: 1
                         },
    function(data){
      for (var i = 0; i < data.length; i++) {
        searchData.push(data[i]);

        var sRV = new app.SearchResultView
        sRV.render(data[i]);
      };
      app.searchData = searchData;
    });
  }

});