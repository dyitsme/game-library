const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

// used to create the user
router.post('/create', userController.createUser)

module.exports = router