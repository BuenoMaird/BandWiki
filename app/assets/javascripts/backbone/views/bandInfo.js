var app = app || {}

app.BandInfo = Backbone.View.extend({
  el: '#app',

  events: {
    'dblclick #bioHead': 'editBio',
    'dblclick #bioCont': 'editCont'
  },

  initialize: function(){
  },

  render: function() {
    var bandView = $('#bandInfoView').html();
    var bVHTML = _.template(bandView);
    $('#bandInfo').append(bVHTML);
    // debugger
  },

  editBio: function() {
    var froala = function(){
      $('#edit').editable({
        inlineMode: false
      })
    };
    froala()
    $('#edit').show()
    var editView = new app.EditBandView
    editView.render()
  },

  editCont: function() {
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