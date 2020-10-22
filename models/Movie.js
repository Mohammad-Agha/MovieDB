const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      min: 1900,
      max: 2020,
      required: true
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 4
    }
  }
)

module.exports = mongoose.model('movies', MovieSchema)