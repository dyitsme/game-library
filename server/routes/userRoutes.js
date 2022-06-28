const express = require('express')
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')
const { avatarUpload } = require('../middleware/imageUpload')

const router = express.Router()

// used to create the user
router.get('/:id', userController.viewUser)
router.patch('/:id', avatarUpload.single('image'), userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router