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

// Creating route to hello

// We start listening to the server on port 3000
app.listen(3000)
