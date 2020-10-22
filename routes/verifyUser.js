const jwt = require('jsonwebtoken')
require('dotenv/config')

const auth = (req, res, next) => {
  const token = req.header('auth-token')
  if(!token) return res.status(401).send({ message: 'Access denied, you should be logged in' })
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET)  
    req.user = verified
    next()
  } 
  catch (error) {
    res.status(400).send('Invalid token')
  }
}

module.exports = auth