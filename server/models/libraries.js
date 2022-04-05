const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const librarySchema = new Schema({
    username: {
        type: String,
        required: true
    }, 
    games: {
        type: String,
        required: true
    }
});


const Library = mongoose.model('Library', userSchema);
module.exports = Library;