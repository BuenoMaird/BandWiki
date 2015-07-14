var app = app || {}

app.SearchResultView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'appendPlaylist'
  },


  render: function(data) {
    // console.log('search result view is appending');
    // var searchResultView = $('#searchResultView').html();
    // var sRVHTML = _.template(searchResultView);
    // console.log(data);
    this.$el.html(data.username).data("uri", data.uri);
    $('#songList').append(this.$el);

  },

  appendPlaylist: function (){
    SC.oEmbed( this.$el.data("uri"),{auto_play: true},   document.getElementById('player') );
    // debugger
  }
})