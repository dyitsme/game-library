const express = require('express')
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')

const router = express.Router()

// used to create the user
router.get('/:id', userController.viewUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router