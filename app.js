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
  let message, result, data, status, error;
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

// Creating a route to add a movie
app.post('/movies/add', (req, res) => {
  res.status(200).send('Add Movie')
})

// Creating a route to edit a movie
app.patch('/movies/edit', (req, res) => {
  res.status(200).send('Edit Movie')
})

// Creating a route to delete a movie
app.delete('/movies/delete', (req, res) => {
  res.status(200).send('Delete Movie')
})

// We start listening to the server on port 3000
app.listen(3000)
