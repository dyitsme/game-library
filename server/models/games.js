const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
    title: {
        type: String,
    },
    genre: {
        type: String,
    },
    rating: {
        type: Number,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    url: {
        type: String,
    }
})


const Game = mongoose.model('Game', gameSchema)
exports.getAllgames = function() {
    Game.find({}, function(err, game) {
        console.log(err)
        console.log(game)

    }) 
}

exports.create = function(obj, next) {
    const game = new Game(obj)

    game.save(function(err, game) {
        next(err, game)
    })
}

exports.getById = function(id, next) {
    Game.findById(id, function(err, game) {
      next(err, game)
    })
}

exports.getOne = function(query, next) {
    Game.findOne(query, function(err, game) {
      next(err, game)
    })
}

exports.updateById = function(id, val, next) {
    Game.findByIdAndUpdate(id, val, function(err, game) {
        next(err, game)
    })
}

exports.deleteById = function(id, next) {
    Game.findByIdAndDelete(id, function(err, game) {
        next(err, game)
    })
}
