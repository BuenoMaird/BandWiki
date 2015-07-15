var app = app || {}

app.BandInfo = Backbone.View.extend({
  el: '#app',

  events: {
    'dblclick': 'edit'
  },

  initialize: function(){
  },

  render: function() {
    var bandView = $('#bandInfoView').html();
    var bVHTML = _.template(bandView);
    $('#bandInfo').append(bVHTML);
    // debugger
  },

  edit: function() {
    var froala = function(){
      $('#edit').editable({
        inlineMode: false
      })
    };
    froala()
    $('#edit').show()
    var editView = new app.EditBandView
    editView.render()
  }



});