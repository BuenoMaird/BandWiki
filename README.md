== README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


Please feel free to use a different markup language if you do not plan to run
<tt>rake doc:app</tt>.

Introduction...

BandWiki is an app that utilises the soundcloud api as well as backbone to give uses the ability to listen to their favorite artists while also updating their profiles to hopefully create a fully functioning wiki for bands.
At it's heart it is a project of love for me as I have always been interested in music and people. I love the story behind the bands and I would love to develop a community where those stories are tracked and updated by people who are as keen as I am

Lets get technical...

Some of the tech used...

Backend:

- Ruby, Postgres: The ruby version running is 2.2.2. The Rails backend is used to talk to the Soundcloud API to receive requests from the search on the frontend, adding the artist to the database in an effort to maintain good practice in not constantly calling SoundCloud to deliver the artists and their playlists.
The Database being used is Postgresql. This is due to Heroku (where the site is hosted) uses Postgres as their backend. It also is a convienent and easy to use DB for an application of this size.

Frontend:

- JavaScript, BackboneJS: The frontend of this site is running entirely on Backbone. The search is a function that calls the soundcloud API which returns a backbone view populated with artists relating to that search.
When an artist is clicked then a new backbone view is called and appeneded to the page, displaying all of that artists information which can then be updated and modified by the community.
Finally as well as when a artist is double clicked a new "player view" is appended to the page which immediately begins playing the artists playlists from soundcloud.

Having the site setup this way enables the users to browse, listen and update the site while the site actively maintains the soundcloud player view which enables unhindered listening.


What I would like to change...

This project is still very much a work in progress. I have had a lot of fun working with backbone but struggling with it has meant that useablitiy of the site has taken a hit. I would like to completely rehaul the UX of the site mainly removing the double click to append the player, instead having that run through a button on the artists site. 
I would also like to get the links up and running correctly, currently the URL is not linking to the current artist that is being viewed, I have this running locally but there is an issue with it being hosted so that is something I am working toward getting fixed up. Apart from that there is more features I would like to add to the site including but not limited to music visualiazation, custom music player and user login and favoriting of artists.


How it all works:

Setup: I will briefly run through the setup of backbone.

- Download the latest version from http://backbonejs.org/. I would also recommend keeping this site open to refer to the awesomely annotated docs.

-Download the latest version of underscore from http://underscorejs.org/. Backbone uses the templates from underscore.

- Within the rails app javascripts folder move the backbone.js as well as underscore.js

- within your javascripts folder create a backbone folder

- within your backbone folder create folders for:
  - Models
  - Collections
  - Router
  - Views
  and a file for app.js

  Models: is where the models for backbone are built. These models should correspond to the models built in your database.

  Collections: are simply an ordered set of models within the backbone.

  Router: Is exactly what it sounds like. It is the hub of backbone building the and directions for each of the views.

  Views: Are where the heavy lifting of each view is built. These contains click events as well as designating the element that the view relates to. 

  App.js file: This is where you can kick off the backbone router. This router doesn't need to be instigated straight away and can be activated only when a certain area of the site is hit.

This is a very brief overview of the file struction for Backbone. Please feel free to view the code in my files for a more indepth view into how these folders and files are built and once again I highly recommend reading the Backbonejs.org annotated docs for a much more cohesive look into backbone and it's amazing potential.















