const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    add: function(req, res){
        const user = new User({
            username: req.body.login,
            avatarURL: req.body.avatar_url,
            score: (Number(req.body.public_repos) + Number(req.body.followers)) * 12
        });
        user.save(function(err){
            if(err){
                if(err.name === 'MongoError' && err.code === 11000){
                    return res.status(500).send({success: false, message: 'User already exists!'});
                }
            }else{
                console.log('Successfully added player.');
            }
        })
        
    },
    all: function(req, res){
        User.find({}).sort({score: 'desc'}).exec(function(err, players){
            if(err){
                console.log(err);
            }else{
                res.json(players);
            }
        })
    }
}