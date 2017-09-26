const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 3}
},{timestamps: true});

const Note = mongoose.model('Note', NoteSchema);