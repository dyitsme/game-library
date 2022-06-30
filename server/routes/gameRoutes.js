const express = require('express')
const gameController = require('../controllers/gameController')
const auth = require('../middleware/auth')
const { avatarUpload } = require('../middleware/imageUpload')

const router = express.Router()

// used to create the user
router.post('/', gameController.createGame)
router.get('/:id', gameController.viewGame)
// router.get('/', gameController.viewGames)
// router.patch('/:id', gameController.updateGame)
// router.delete('/:id', gameController.deleteGame)

module.exports = router