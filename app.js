// Importing the modules we need
const express = require('express')

// Execute express module
const app = express()

// Creating route to home
app.get('/', (req, res) => {
  res.status(200).send('Ok')
})

// Creating route to test
app.get('/test', (req, res) => {
  const result = {
    status: 200,
    message: "Ok"
  }
  res.status(200).send(result)
})

// Creating route to time
app.get('/time', (req, res) => {
  const time = new Date()
  const timeString = `${time.getHours()}:${time.getMinutes()}`
  const result = {
    status: 200,
    message: timeString
  }
  res.status(200).send(result)
})

// Creating route to hello with parameters
app.get('/hello/:id', (req, res) => {
  const message = `Hello, ${req.params.id}`
  const result = {
    status: 200,
    message
  }
  res.status(200).send(result)
})

// Creating route to search with a string
app.get('/search', (req, res) => {
  let message, result, data, status, error
  if(req.query.s) {
    status = 200
    message = "Ok"
    data = req.params.search
    result = {
      status,
      message,
      data
    }
  }
  else {
    status = 500
    error = true
    message = "You have to provide a search"
    result = {
      status,
      error,
      message
    }
  }
  res.status(status).send(result)
})

// Here we are mimicing a database
const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

// Creating a route to get all movies
app.get('/movies/get', (req, res) => {
  const result = {
    status: 200,
    data: movies
  }
  res.status(200).send(result)
})

// Creating a route to get a movie
app.get('/movies/get/id/:id', (req, res) => {
  let result, status, message, error
    if(req.params.id >= 0 && req.params.id < movies.length) {
      status = 200
      result = {
        status,
        data: movies[req.params.id]
      }
    }
    else {
      status = 404,
      result = {
        status,
        error: true,
        message: `The movie ${req.params.id} doesn't exist`
      }
    }
    res.status(status).send(result)
})

// Creating a route to gell all movies ordered by date
app.get('/movies/get/by-date', (req, res) => {
  const sortedMoviesByDate = [...movies]
  sortedMoviesByDate.sort((b, a) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0)) // source: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
  const result = {
    status: 200,
    data: sortedMoviesByDate
  }
  res.status(200).send(result)
})

// Creating a route to gell all movies ordered by rating
app.get('/movies/get/by-rating', (req, res) => {
  const sortedMoviesByRating = [...movies]
  sortedMoviesByRating.sort((b, a) => (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0))
  const result = {
    status: 200,
    data: sortedMoviesByRating
  }
  res.status(200).send(result)
})

// Creating a route to gell all movies ordered by title
app.get('/movies/get/by-title', (req, res) => {
  const sortedMoviesByTitle = [...movies]
  sortedMoviesByTitle.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
  const result = {
    status: 200,
    data: sortedMoviesByTitle
  }
  res.status(200).send(result)
})

// Creating a route to add a movie
app.post('/movies/add', (req, res) => {
  if(req.query){
    let result, status, yearBoolean = false, yearString, yearInt, data, message, error, rating = 4
    if(req.query.year) {
      yearString = req.query.year
      yearInt = parseInt(req.query.year)
      if(yearString.length <= 4 && !isNaN(yearInt)) {
        yearBoolean = true
      }
    }
    if(!req.query.title || !yearBoolean) {
      status = 403
      error = true
      message = 'You cannot create a movie without providing a title and a year'
      result = {
        status,
        error,
        message
      }
    }
    else {
      if(req.query.rating) rating = req.query.rating
      const newMovie = {
        title: req.query.title,
        year: req.query.year,
        rating
      }
      status = 200
      movies.push(newMovie)
      result = {
        status,
        data: movies
      }
    }
    res.status(status).send(result)
  }
})

// Creating a route to edit a movie
app.patch('/movies/edit', (req, res) => {
  res.status(200).send('Edit Movie')
})

// Creating a route to delete a movie
app.delete('/movies/delete/:id', (req, res) => {
  
})

// We start listening to the server on port 3000
app.listen(3000)
