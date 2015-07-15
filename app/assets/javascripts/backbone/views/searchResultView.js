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
    var bandInfo = new app.BandInfo;
    bandInfo.render();
    $('#bandName').html('Name: ' + band.attributes.name);
    $('#bandCountry').html('Country: ' + band.attributes.location)
    $('#bandBio').html('Bio: ' + band.attributes.bio);
    // debugger
  },

  bandFromDB: function(){
    var view = this
    app.band = new app.Band({scID: this.$el.data('id')});
    app.band.fetch({ data: { scID: app.band.toJSON().scID } }).done(function(){
      view.appendBandInfo(app.band);
    });
  }
})