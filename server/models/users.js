const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    }, 
    email: {
       type: String,
       required: true 
    },
    password: {
        type: String,
        required:  true
    }
});

const User = mongoose.model('User', userSchema)

exports.create = function(obj, next) {
    const user = new User(obj);

    user.save(function(err, user) {
        next(err, user);
    })
}
  
  // Retrieving a user based on ID
exports.getById = function(id, next) {
    User.findById(id, function(err, user) {
      next(err, user);
    })
}

exports.getOne = function(query, next) {
    User.findOne(query, function(err, user) {
      next(err, user);
    })
}