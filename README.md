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

Ruby and rails are running the backend: They're main role is really just talking to the soundcloud API to request a band by its soundcloud ID. This is then added to the apps database so it isnt constantly requesting data from soundcloud (good practice get at me!) but yeah really the the database is 
