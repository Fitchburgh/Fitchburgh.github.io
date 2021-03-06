---
layout: post
title:  "Heroku: Part 1"
date:   2016-10-11
categories: standard
---
Heroku. Sinatra. Rails. PG. Postico. ActiveRecord. Elixir. Go. HTML. CSS. SCSS. JQuery. JQueryUI. The list goes on.

At the Iron Yard, it almost always seems like a firehose of applications, utilities, gems and general programming knowledge.  

One in particular, Heroku, coupled with Ruby, Postgres, ActiveRecord and Sinatra, seems to be one that my classmate (and I...) always seem to run into some sort of issue with.

So I decided to write about a template I've adopted which has worked pretty well the last few times deploying an app over the next few blog posts.  

This post will cover file structure and creating your project folder.  As with any program there's probably a better more efficient way to do what I'm doing, and I will gladly take suggestions and make adjustments where necessary.

This will be with 2 source tables and 1 joined table via SQL. Reminder Heroku has a 10,000 line limit in your tables (cumulative).


It's basically a checklist of files and folders you'll need before you even think about deploying.

So let's start at the top.

You first need an app folder.

For ease of understanding any terminal commands I will be using will start with a $ sign.  I like to get my entire project folder files created before going into anything else


$ mkdir hello_heroku

$ cd hello_heroku


Once you're in the folder you can either create the rest in terminal or in your favorite text editor.  I use terminal for creating and Atom for editing. I'll learn V.im eventually. I promise.


$ mkdir config

$ touch config/database.yml


This file will be used to connect to our databases.


$ mkdir db

$ mkdir db/migrate

$ cd db/migrate


This is where we will be creating our table schemas. Naming and order is EXTREMELY important.  The numbering of your files will determine the order in which the tables in SQL will be created.


$ touch 001_create_armors.rb

$ touch 002_create_weapons.rb

$ touch 003_create_characters.rb


Next we'll need our models.


$mkdir models

cd models

$ touch armor.rb

$ touch character.rb

$ touch weapon.rb


These models are used for each table you'll want to create.  Each will use ActiveRecord to make associations between each other.


$ mkdir public


Let me tell a quick story.  Casing is extremely important. As I've said I always thought to be a person who paid attention to detail.  Until I started programming.  I left this folder with a capital 'P' for longer than I care to admit. Please be careful when naming.  Bet you've never heard that before.


$ mkdir public/js

$ mkdir public/styles

$ cd public


At this point I usually navigate to each folder and create the files.  Do whatever you do the fastest.


$ index.html

$ cd js


$ touch jquery.js

$ touch main.js


$ cd ../styles

$ mkdir images


$ touch main.css

$ touch reset.css


$ cd ../..


Again lots of navigation, but I like doing things in terminal.  Makes me feel like I'm doing something awesome.


$ touch config.ru


More on this later.


$ touch Gemfile

$ touch Procfile


$ touch Rakefile


Notice no extensions here.


$ touch routes.rb

$ touch seeds.rb


That's it!  Baseline skeleton structure for your eventual awesome app!


Part 2 coming soon.


Back to the JavaScript grind!

-Fitchburgh
