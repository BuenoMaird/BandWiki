var app = app || { }

app.EditBandView = Backbone.View.extend({
  el: '#bandInfo',
  events: {
    'click #editBio': 'updateBio',
    'click #editCountry': 'updateCont',
    'click #editName': 'updateName',
    'click #editClose': 'close'
  },

  initialize: function(){
  },

  render: function(band){
    console.log('edit view rendering');
    var eBV = $('#editBandView').html();
    var eBVHTML = _.template(eBV);
    $('#bandInfo').append(eBVHTML)
  },

  updateBio: function(e){
    event.preventDefault();
    app.band.attributes.bio = $('#edit').editable('getHTML');
    $('#bandBio').html($('#edit').editable('getHTML'));
    app.band.save();
    $('#editForm').remove();
    $('#edit').hide();
    var sRV = new app.SearchResultView;
    sRV.render();
  },

  updateCont: function(e){
    event.preventDefault();
    app.band.attributes.location = $('#edit').editable('getHTML');
    $('#bandCountry').html($('#edit').editable('getHTML'));
    app.band.save();
    $('#editForm').remove();
    $('#edit').hide();
    var sRV = new app.SearchResultView;
    sRV.render();
  },

  updateName: function(e){
    event.preventDefault();
    app.band.attributes.name = $('#edit').editable('getHTML');
    $('#bandName').html($('#edit').editable('getHTML'));
    app.band.save();
    $('#editform').remove();
    var sRV = new app.SearchResultView;
    sRV.render();
  },

  close: function() {
    event.preventDefault();
    $('#editForm').remove()
    $('#edit').hide()
  }


});