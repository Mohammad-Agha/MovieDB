# Movie DB

It made more sense to split the challenge to two files app.js and app2.js.

app.js contains steps 1 to 11

app2.js contains steps 12 and 13, I connected steps 12 and 13 together as a single project and added a models folder and a route folder for a better project structure and better than having everything at a single file


* Make sure to change the `start` property in the `scripts` object in the `package.json` file
  * `"start": "nodemon app.js"` when testing app.js
  * `"start": "nodemon app2.js"` when testing app2.js

* Add a .env file to the project with these two variables
  * `DB_CONNECTION` please dm me for this
  * `TOKEN_SECRET` this can be anything which will be the prefix of the token

* API routes for app.js
  * `/` returns `ok`
  * `/time` returns `current time`
  * `/hello/:id` returns `hello <id>`
  * `/search?s=this is the search query parameter` returns `this is the search query parameter`
  * `/movies/get` returns all movies
  * `/movies/get/id/:id` returns a movie with a specific ID
  * `/movies/get/by-date` returns all movies sorted by date
  * `/movies/get/by-rating` returns all movies sorted by ratings
  * `/movies/get/by-title` returns all movies sorted by title
  * `/movies/add?title=Movie 1&year=2000&rating=10` adds a movie having the properties in the query paramters (Method should be POST)
  * `/movies/edit/:id?title=Updated Movie&year=2010&rating=5` edits a movie having the properties in the query parameters for a specific ID (Method should be PATCH)
  * `/movies/delete/:id` deletes a movie having the specified ID (Method should be DELETE)
  

Updating/Deleting a user is the same as before didn't do it because it will just copy paste as the movies, I focused more on having a better authentication and authorization of the user, rather than having a static user array and a static user logged in variable.

* API routes for app2.js
  * For users
    * `/user/register` adds a user (values are passed in the body of the request)
    * `/user/login` user login (values are passed in the body of the request)
  
  * For movies
    * Doing all these below api calls requires the user to be logged i.e he has a token, make sure to get the token in the response from the login route and add it to the header of the request as `auth-token`, otherwise all the below requests will return `Access denied, you should be logged in`
    * `/movies` returns all movies (method should be GET)
    * `/movies/:movieId` returns the movie having the specified ID (method should be GET)
    * `/movies` adds a movie (method should be POST and values are passed in the body of the request)
    * `/movies/:movieId` deletes a movie with the specified ID (method should be DELETE and values are passed in the body of the request)
    * `/movies/:movieId` updates a movie with the specified ID (method should be PATCH and values are passed in the body of the request)



