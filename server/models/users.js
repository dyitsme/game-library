const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
    }, 
    email: {
       type: String,
    },
    password: {
        type: String,
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
});

const User = mongoose.model('User', userSchema)

exports.create = function(obj, next) {
    const user = new User(obj)

    user.save(function(err, user) {
        next(err, user)
    })
}
  
  // Retrieving a user based on ID
exports.getById = function(id, next) {
    User.findById(id, function(err, user) {
      next(err, user)
    })
}

exports.getOne = function(query, next) {
    User.findOne(query, function(err, user) {
      next(err, user)
    })
}

exports.updateById = function(id, val, next) {
    User.findByIdAndUpdate(id, val, function(err, user) {
        next(err, user)
    })
}

exports.deleteById = function(id, next) {
    User.findByIdAndDelete(id, function(err, user) {
        next(err, user)
    })
}
