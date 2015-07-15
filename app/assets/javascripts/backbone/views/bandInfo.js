var app = app || {}

app.BandInfo = Backbone.View.extend({
  el: '#app',

  events: {
    'dblclick': 'edit'
  },

  initialize: function(){
  },

  render: function() {
    console.log('band info is rendering');
    var bandView = $('#bandInfoView').html();
    var bVHTML = _.template(bandView);
    $('#bandInfo').append(bVHTML);
    // debugger
  },

  edit: function() {
    var editView = new app.EditBandView
    editView.render()
  }



});