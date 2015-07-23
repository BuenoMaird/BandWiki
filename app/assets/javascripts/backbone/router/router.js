var app = app || {}

app.AppRouter = Backbone.Router.extend({

  routes: {
    '': 'index',
    'band/:id': 'showBand',
    'search:string': 'showSearch'

  },

  initialize: function (){
    var appView = new app.AppView();
    appView.render();
    console.log(appView)
  },

  index: function() {
    var bandInfo = new app.BandInfo;
    bandInfo.render();
  },

  showBand: function(id){
    app.band = new app.Band({scID: id});
    app.band.fetch({ data: { scID: app.band.toJSON().scID } }).done(function(){
      var sRV = new app.SearchResultView();
      sRV.appendBandInfo(app.band);
    });
  },

  showSearch: function(){

  }

});

