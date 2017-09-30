const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    avatarURL: {type: String},
    score: {type: Number, required: true}
})

const User = mongoose.model('User', UserSchema);