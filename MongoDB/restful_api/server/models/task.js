const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    tite: String,
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false},
}, {timestamps: true});

mongoose.model('task', taskSchema);