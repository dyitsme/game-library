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
      image: `http://localhost:3000/${result.image}`
    })
  })
}

const updateUser = (req, res) => {
  const { id } = req.params
  // const updates = req.body
  // console.log('hello')
  // console.log('hello' + req.file.path)
  if (req.file || req.file.path) {
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
      return res.status(200).send('Account updated!')
    })
  }
  else {
    const updates = req.body

    userModel.updateOne(id, {$set: updates}, (err, result) => {
      if (err) {
        return res.status(500).send()
      }
      return res.status(200).send('Account updated!')
    })
  }
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