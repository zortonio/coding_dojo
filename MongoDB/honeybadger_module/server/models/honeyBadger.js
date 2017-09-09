const mongoose = require('mongoose');

const honeyBadgerSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    dig_speed: { type: Number, required: true, min: 1 },
    anger_level: { type: Number, required: true, min: 10 },
    offspring: { type: Number, required: true, min: 0, max: 100 },
    cares_given: { type: Number, required: true, max: 0 }
}, { timestamps: true });

mongoose.model('honeyBadger', honeyBadgerSchema);