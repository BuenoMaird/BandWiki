var app = app || {}

app.Band = Backbone.Model.extend({
  urlRoot: '/bands',
  defaults: {
    name: 'Untitled band',
    location: 'Unknown location',
    members: 'Unknown members',
    yearsActive: 'Unknown',
    website: 'Unknown website',
    soundcloud: 'unknown soundcloud link'
  }


});