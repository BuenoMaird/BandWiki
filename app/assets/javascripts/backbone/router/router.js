var app = app || {}

app.AppRouter = Backbone.Router.extend({

  routes: {
    '': 'index'
  },

  initialize: function (){
    var appView = new app.AppView();
    appView.render();
    console.log(appView)
  }

});

