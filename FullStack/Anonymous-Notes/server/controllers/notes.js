const mongoose = require('mongoose');
const Note = mongoose.model('Note');
module.exports = {
    create: function(req, res){
        const note = new Note({
            text: req.body.text
        });
        note.save(function(err){
            if(err){
                console.log(err);
            } else {
                console.log('Success!');
                res.redirect('/');
            }
        })
    },
    all: function(req, res){
        Note.find({}).sort({createdAt: 'desc'}).exec(function(err, notes){
            if(err){
                console.log(err);
            } else{
                res.json(notes);
            }
        })
    }
}