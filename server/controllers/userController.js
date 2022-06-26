const userModel = require('../models/users')

const viewUser = (req, res) => {
  const { id } = req.params
  userModel.getById(id, (err, result) => {
    if (err) {
      return res.status(500).send()
    }
    console.log(result)
    res.json({ 
      username: result.username,
      email: result.email,
      description: result.description,
      image: result.image
    })
  })
}

const updateUser = (req, res) => {
  const { id } = req.params
  const { username, email, description } = req.body
  const obj = {
    username: username,
    email: email,
    description: description,
    image: req.file.path
  }
  
  userModel.updateOne(id, obj, (err, result) => {
    if (err) {
      return res.status(500).send()
    }
    res.json({ 
      username: result.username,
      email: result.email,
      description: result.description,
      image: result.image
    })
  })

  // deprecated, not ideal for ui
  // userModel.getOne({ username: username }, (err, result) => {
  //   if (result) {
  //     res.status(500).send('User with that username already exists. Please try again.')
  //   }
    // else {
  // }
  // })
}

const deleteUser = (req, res) => {
  const { id } = req.params
  userModel.deleteById(id, (err, result) => {
    if (err) {
      return res.status(500).send()
    }
    return res.status(200).send(`Successfully deleted user ${result.username}`)
  })
}

module.exports = {
  viewUser,
  updateUser,
  deleteUser
}