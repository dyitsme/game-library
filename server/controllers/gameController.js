const gameModel = require('../models/games')
const { deleteOldImage } = require('../utils/fileCleaner')

const viewGame = (req, res) => {
  const { id } = req.params
  gameModel.getById(id, (err, result) => {
    if (err) {
      return res.status(500).send()
    }
    res.json({ 
      title: result.title,
      genre: result.genre,
      rating: result.rating,
      description: result.description,
      image: `http://localhost:3000/${result.image}`,
      url: result.url
    })
  })
}

const deleteGame = (req, res) => {
  const { id } = req.params
  gameModel.deleteById(id, (err, result) => {
    if (err) {
      return res.status(500).send()
    }
    res.json({ 
      title: result.title,
      genre: result.genre,
      rating: result.rating,
      description: result.description,
      image: `http://localhost:3000/${result.image}`,
      url: result.url
    })
  })
}

const updateGame = (req, res) => {
  // if (req.file){
    const { id } = req.params
    const { title, genre, rating, description, url } = req.body
    const obj = {
      title: title,
      genre: genre,
      rating: rating,
      description: description,
      url: url,
      // image: req.file.path
    }
    
    gameModel.updateById(id, obj, (err, result) => {
      if (err) {
        console.log(err)
        return res.status(500).send('Error updating game.')
      }
      console.log(result)
      return res.status(200).send('Successfully updating game!')
    })
  // }
}

const createGame = (req, res) => {
  const { title, genre, rating, description, url } = req.body
  const obj = {
    title: title,
    genre: genre,
    rating: rating,
    description: description,
    url: url,
    image: req.file.path
  }
  
  gameModel.create(obj, (err, result) => {
    if (err) {
      console.log(err)
      return res.status(500).send('Error creating game.')
    }
    console.log(result)
    return res.status(200).send('Successfully created game!')
  })
}

module.exports = {
  viewGame,
  createGame,
  updateGame,
  deleteGame
}
