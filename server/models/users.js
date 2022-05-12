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

const getOne = function(query, next) {
    User.findOne(query, function(err, user) {
        next(err, user)
    }) 
}

const User = mongoose.model('User', userSchema)

module.exports = {
    User,
    getOne
}