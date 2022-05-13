const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

const userModel = require('../models/users')

const registerUser = (req, res) => {

  const errors = validationResult(req)

  if (errors.isEmpty()) {
    const { username, email, password, confirmPassword } = req.body
    userModel.getOne({ username: username }, (err, result) => {
      if (result) {
        console.log(result);
        // found a match, return to login with error
        res.send('User already exists. Please login.')
      } 
      else {
        bcrypt.hash(password, 10, (err, hashed) => {
          const newUser = {
            username: username,
            email: email,
            password: hashed
          }
        
          userModel.create(newUser, (err, user) => {
            if (err) {
              res.status(400).send('Could not create user. Please try again.')
            }
            else {
              res.send('You are now registered! Login below.')
              // redirect to login
            }
          })
        })
      }
    })
  }
  else {
    const messages = errors.array().map((item) => item.msg);
    res.status(400).send(messages)
  }
}

const loginUser = async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username: username })
  console.log(user)
  console.log(req.body)

  if (user == null) {
    return res.status(400).send('Incomplete fields.')
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      res.send('Sucessfully logged in')
    }
    else {
      res.status(401).send('Invalid username and/or password!')
    }
  }
  catch {
    res.status(500).send()
  }
}

module.exports = {
  registerUser,
  loginUser
}