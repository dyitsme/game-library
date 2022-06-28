const userModel = require('../models/users')
const { deleteOldImage } = require('../utils/fileCleaner')

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
  
  const { username, email, description } = req.body

  // if user didn't upload a file
  if (!req.file) {
    const obj = {
      username: username,
      email: email,
      description: description
    }

    userModel.updateOne(id, obj, (err, result) => {
      if (err) {
        return res.status(500).send()
      }
      return res.status(200).send('Account updated!')
    })
  }
  else {
    const obj = {
      username: username,
      email: email,
      description: description,
      image: req.file.path
    }
    // get old file link first
    // 
    let oldImage = ''
    userModel.getOne({_id: id}, (err, result) => {
      if (err) {
        throw new Error('Could not find image link')
      }
      oldImage = result.image
    })
    
    userModel.updateOne(id, obj, (err, result) => {
      if (err) {
        return res.status(500).send()
      }
      deleteOldImage(oldImage)
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