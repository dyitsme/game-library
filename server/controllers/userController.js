const bcrypt = require('bcrypt')

const User = require('../models/users')

const createUser = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = new User({
    username: username,
    email: email,
    password: hashedPassword
  })

  if (password == confirmPassword) {
    user.save()
      .then((result) => {
          res.send(result);
      })
      .catch((err) => {
          console.log(err);
      })
    res.status(201).send('User was created')
  }
  else {
    console.log("Password and confirm password do not match")
    res.status(403).send('Password and confirm password do not match')
  }
}

const loginUser = async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username: username })
  console.log(user)
  console.log(req.body)

  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      res.send('Sucessfully logged in')
    }
    else {
      res.status(401).send('Not allowed')
    }
  }
  catch {
    res.status(500).send()
  }
}

module.exports = {
  createUser,
  loginUser
}