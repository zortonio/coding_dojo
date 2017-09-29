const mongoose = require('mongoose');
const Player = mongoose.model('Player');

module.exports = {
    create: function(req, res){
        const player = new Player({
            name: req.body.name,
            position: req.body.position,
            games: {game1: 'Undecided', game2: 'Undecided', game3: 'Undecided'}
        });
        player.save(function(err){
            if(err){
                console.log(err);
            } else{
                console.log('Successfully saved new Player.')
            }
        })
    },
    all: function(req, res){
        Player.find({}, function(err, players){
            if(err){
                console.log(err);
            }else{
                console.log('Successfully retrieved players')
                res.json(players);
            }
        })
    },
    remove: function(req, res){
        Player.remove({_id: req.params.id}, function(err){
            if(err){
                console.log(err);
            }else{
                console.log('Successfully removed player')
            }
        })
    },
    update: function(req, res){
        let game = req.body.game;
        let set = {$set: {}};
        set.$set['games.'+game] = req.body.status;
        Player.update({_id: req.params.id}, set, function(err){
            if(err){
                console.log(err);
            }else{
                console.log('Successfully updated the record!');
            }
        })
    }
}