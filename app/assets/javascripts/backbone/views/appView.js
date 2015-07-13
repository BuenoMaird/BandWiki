var app = app || {}

app.AppView = Backbone.View.extend({
  el:'#app',

  initialize: function (){
    // searchView.render();
    // searchListView.render();
  },

  render: function (){
    var appTemplate = $('#appView').html();
    var appHTML = _.template(appTemplate);
    this.$el.html(appHTML);

    var searchView = new app.SearchView
    searchView.render()
  }

});