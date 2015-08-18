var app = app || {}

app.BandInfo = Backbone.View.extend({
  el: '#app',

  events: {
    'click #bioHead': 'editBio',
    'click #bioCont': 'editCont',
    'click #ASbutton': 'appendPlayer'
  },

  initialize: function(){
  },

  render: function() {
    
    var bandView = $('#bandInfoView').html();
    var bVHTML = _.template(bandView);
    $('#bandInfo').append(bVHTML);
    // debugger
  },

  appendPlayer: function(){
    SC.oEmbed( app.band.attributes.uri,{auto_play: true}, document.getElementById('player') );
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