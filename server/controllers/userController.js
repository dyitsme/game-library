const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

const User = require('../models/users')

const registerUser = async (req, res) => {

  const errors = validationResult(req)

  if (errors.isEmpty()) {
    const { username, email, password, confirmPassword } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({
      username: username,
      email: email,
      password: hashedPassword
    })
    userModel.getOne({ username: username }, (err, result) => {
      if (result) {
        console.log(result);
        // found a match, return to login with error
        // req.flash('error_msg', 'User already exists. Please login.');
      } 
      else {
        
        // no match, create user (next step)
        // for now we redirect to the login with no error.

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