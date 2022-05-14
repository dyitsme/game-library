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
        res.status(400).send('User already exists. Please login.')
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

const loginUser = (req, res) => {
  const { username, password } = req.body
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { username, password } = req.body
    userModel.getOne({ username: username }, (err, user) => {
      if (err) {
        // Database error occurred...
        req.flash('error_msg', 'Something happened! Please try again.');
        res.redirect('/login');
      } else {
        // Successful query
        if (user) {
          // User found!
          // check password with hashed password
          bcrypt.compare(password, user.password, (err, result) => {
            // passwords match (result == true)
            if (result) {
              // Update session object once matched!
              // req.session.user = user._id;
              // req.session.name = user.name;
          
              // console.log(req.session);
          
              res.send('You are now logged in.')
            } else {
              // passwords don't match
              res.status(401).send('Incorrect password. Please try again.')
              // res.redirect('/login');
            }
          })
        } else {
          // No user found
          res.status(400).send('No registered user with that username. Please register.')
          // res.redirect('/register');
        }
      }
    })
  }
  else {
    const messages = errors.array().map((item) => item.msg);
    res.status(400).send(messages)
  }
}

module.exports = {
  registerUser,
  loginUser
}