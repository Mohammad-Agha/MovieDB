const express = require('express')
const Movie = require('../models/Movie')
const verify = require('./verifyUser')
const router = express.Router()

// Get all movies
router.get('/', verify, async (req, res) => {
  try {
    const movies = await Movie.find()
    res.json(movies)
  }
  catch(err) {
    res.json({ message: err.message })
  }
})

// Get a movie
router.get('/:movieId', verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movieId)
    res.json(movie)
  } 
  catch (err) {
    res.send({ message: err.message })
  }
})

// Add a movie
router.post('/', verify, async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    year: req.body.year,
    rating: req.body.rating
  })
  try {
    const savedMovie = await movie.save()
    res.json(savedMovie)
  }
  catch(err) {
    res.json({ message: err.message })
  }
})

// Delete a movie
router.delete('/:movieId', verify, async (req, res) => {
  try {
    const removedMovie = await Movie.remove({ _id: req.params.movieId })
    res.json(removedMovie)
  } 
  catch (err) {
    res.send({ message: err.message })
  }
})

// Update a movie
router.patch('/:movieId', verify, async (req, res) => {
  
  try {
    const updatedMovie = await Movie.updateOne(
      { _id: req.params.movieId },
      { $set: {title: req.body.title, year: req.body.year, rating: req.body.rating} }
    )
    res.json(updatedMovie)
  } 
  catch (err) {
    res.send({ message: err.message })
  }
})

module.exports = router