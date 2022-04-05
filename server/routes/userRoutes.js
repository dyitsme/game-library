const express = require('express');
const userController = require('../controllers/userController');

const router = express.router();

// used to create the user
router.post('/create-user', userController.createUser);