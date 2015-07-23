var app = app || {}

app.SearchResultView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'dblclick': 'appendPlaylist',
    'click': 'bandFromDB'
  },


  render: function(data) {
    //Saves the data.uri into an accesible .data element so it can be retrieved in other functions function.
    this.$el.html(data.username).data(data);
    $('#songList').append(this.$el);
  },

  appendPlaylist: function (){
    SC.oEmbed( this.$el.data("uri"),{auto_play: true}, document.getElementById('player') );
  },

  appendBandInfo: function (band){
    $('#bandName, #bandCountry, #bandBio, #nameHead, #contHead, #bioHead').remove();
    var bandInfo = new app.BandInfo;
    bandInfo.render();
    $('#bandName').html(band.attributes.name);
    $('#bandCountry').html(band.attributes.location);
    $('#bandBio').html(band.attributes.bio);
  },

  bandFromDB: function(){
    // Returns the bands id based on the soundcloud id from the li.
    var id = this.$el.data('id');
    app.router.navigate('band/' + id, true);
  }
})