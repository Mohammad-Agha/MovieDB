// Importing the modules we need
const express = require('express')

// Execute express module
const app = express()

// Creating our route to home
app.get('/', (req, res) => {
    res.send('Ok')
})

// We start listening to the server on port 3000
app.listen(3000)
