// Importing the modules we need
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// Execute express module
const app = express()

// Importing Routes
const moviesRoutes = require('./routes/movies')
const authRoute = require('./routes/auth')

// Middlewares
app.use(bodyParser.json())
app.use('/movies', moviesRoutes)
app.use('/user', authRoute)

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB')
})

// Listening on port 3000
app.listen(3000)