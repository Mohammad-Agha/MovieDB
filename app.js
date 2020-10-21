// Importing the modules we need
const express = require('express')

// Execute express module
const app = express()

// Creating route to home
app.get('/', (req, res) => {
  res.send('Ok')
})

// Creating route to test
app.get('/test', (req, res) => {
  const result = {
    status: 200,
    message: "Ok"
  }
  res.send(result)
})

// Creating route to time
app.get('/time', (req, res) => {
  const time = new Date()
  const timeString = `${time.getHours()}:${time.getMinutes()}`
  const result = {
    status: 200,
    message: timeString
  }
  res.send(result);
})

// We start listening to the server on port 3000
app.listen(3000)
