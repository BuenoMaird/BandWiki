var app = app || {}

app.SearchListView = Backbone.View.extend({
  el: '#app',

  initialize: function(){
    //Empty for now
  },

  render: function() {
    console.log('searchList is rendering');
    var sLV = $('#searchListView').html();
    var sLVHTML = _.template(sLV);
    $('#searchList').append(sLVHTML)
  }
});