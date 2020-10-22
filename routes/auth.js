const router = require('express').Router()
const jwt = require('jsonwebtoken') 
const bcrypt = require('bcryptjs')
require('dotenv/config')
const User = require('../models/User')

// Add a user
router.post('/register', async (req, res) => {

  // Check if username exist because it should be unique
  const usernameExist = await User.findOne({ username: req.body.username })
  if(usernameExist) return res.status(400).send({ message: 'Username exists' })

  if(req.body.password.length < 8) {
    return res.status(400).send({ message: 'Password should be minumum 8 characters' })
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  
  const user = new User({
    username: req.body.username,
    password: hashedPassword
  })
  try {
    const newUser = await user.save()
    res.send({
      id: newUser._id,
      username: newUser.username
    })
  } 
  catch (error) {
    res.status(404).send({message: error.message})
  }

})

// User auth
router.post('/login', async (req, res) => {

  // Check if username exists
  const user = await User.findOne({ username: req.body.username })
  if(!user) return res.status(400).send({ message: 'Username or password is wrong' })

  // Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if(!validPassword) return res.status(400).send({ message: 'Username or password is wrong' })
  
  // Everything is fine
  // Create a token and assign it to the user
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
  res.header('auth-token', token).send(token)
})

module.exports = router