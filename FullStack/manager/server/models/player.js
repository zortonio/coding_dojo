const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {type: String, minlength: 2, required: true},
    position: {type: String},
    games: {type: Object}
})

const Player = mongoose.model('Player', PlayerSchema);