const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id:Number,
    userName: String,
    password: String,
})

const User = mongoose.model('User', userSchema)

module.exports = User