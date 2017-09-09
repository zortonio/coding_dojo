const mongoose = require('mongoose');
const Human = mongoose.model('human');

module.exports = {
    index: function(req, res){
        Human.find({}, function (err, humans) {
            if (err) {
                console.log(`Error retrieving humans from the database.`);
            } else {
                res.json(humans);
            }
        })
    },
    create: function(req, res){
        const human = new Human({name: req.params.name});
        human.save(function(err){
            if(err){
                console.log(`Error saving human to the database.`);
            } else{
                console.log(`Successfully added human!`);
                res.redirect('/');
            }
        })
    },
    destroy: function(req, res){
        Human.remove({name: req.params.name}, function(err){
            if(err){
                console.log(`Error removing human.`);
            } else{
                res.redirect('/');
            }
        })
    },
    show: function(req, res){
        Human.find({}, function(err, human){
            if(err){
                console.log(`Error finding human.`);
            } else{
                res.json(human);
            }
        }).limit(1);
    }
}