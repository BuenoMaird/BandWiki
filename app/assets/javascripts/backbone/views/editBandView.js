var app = app || { }

app.EditBandView = Backbone.View.extend({
  el: '#bandInfo',
  events: {
    'click #editClose': 'close'
  },

  render: function(){
    console.log('edit view rendering');
    var eBV = $('#editBandView').html();
    var eBVHTML = _.template(eBV);
    $('#bandInfo').append(eBVHTML)
  },

  close: function(e){
    event.preventDefault();
  }

});