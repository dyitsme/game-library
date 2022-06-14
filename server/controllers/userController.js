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

}

const deleteUser = (req, res) => {
  const { id } = req.params
  userModel.deleteById(id, (err, result) => {
    if (err) {
      return res.status(500).send()
    }
    console.log(`Successfully deleted user ${result.username}, Usercontroller.js`)
  })
}

module.exports = {
  viewUser,
  updateUser,
  deleteUser
}