var app = app || {}

app.AppView = Backbone.View.extend({
  el:'#app',

  initialize: function (){
  },

  render: function (){
    var appTemplate = $('#appView').html();
    var appHTML = _.template(appTemplate);
    this.$el.html(appHTML);

    var searchView = new app.SearchView
    searchView.render()

    var searchListView = new app.SearchListView
    searchListView.render()
  }

});