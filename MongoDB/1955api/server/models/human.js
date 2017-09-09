const mongoose = require('mongoose');

const humanSchema = new mongoose.Schema({
    name: String
})

mongoose.model('human', humanSchema);

