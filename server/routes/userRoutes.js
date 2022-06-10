const express = require('express')
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')

const router = express.Router()

// used to create the user
router.get('/', userController.viewUser)
router.put('/', userController.updateUser)
router.delete('/', authController.deleteUser)

module.exports = router