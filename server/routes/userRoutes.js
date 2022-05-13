const express = require('express')
const userController = require('../controllers/userController')
const { registerValidation, loginValidation } = require('../validator')

const router = express.Router()

// used to create the user
router.post('/register', registerValidation, userController.registerUser)
router.post('/login', loginValidation, userController.loginUser)

module.exports = router