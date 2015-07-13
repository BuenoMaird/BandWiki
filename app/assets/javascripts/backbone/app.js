var app = app || {};

// Use {{ Handlebars style }} interpolation instead of <%= erb style %>.
_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};

$(document).ready(function(){

  var connectSoundCloud = function(){
  SC.initialize({
  client_id: "9fe36ec8f8911ba5b8afa911f2cc7ef6",
  redirect_uri: "http://BandWiki.herokuapp.com",
  });
  connectSoundCloud()
}


  // Start up the router and begin tracking the backbone history
  app.router = new app.AppRouter();
  Backbone.history.start()

});