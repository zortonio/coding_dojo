const mongoose = require('mongoose');
const HoneyBadger = mongoose.model('honeyBadger');
let error_messages = [];

module.exports = {
    index: function(req, res){
        error_messages = [];
        HoneyBadger.find({}, function (err, honeyBadgers) {
            if (err) {
                for (const e in err.errors) {
                    console.log(err.errors[e].message);
                };
            } else {
                res.render('index', { honeyBadgers });
            }
        })
    },
    new: function(req, res){
        res.render('addNew', { errors: error_messages });
    },
    create: function(req, res){
        error_messages = [];
        const honeyBadger = new HoneyBadger({
            name: req.body.name,
            dig_speed: req.body.digSpeed,
            anger_level: req.body.angerLevel,
            offspring: req.body.offspring,
            cares_given: req.body.cares
        });
        honeyBadger.save(function (err) {
            if (err) {
                for (const e in err.errors) {
                    error_messages.push(err.errors[e].message);
                };
                res.redirect('/honeybadgers/new');
            } else {
                console.log(`Successfully added a new honey badger.`);
                res.redirect('/');
            }
        })
    },
    show: function(req, res){
        HoneyBadger.find({ _id: req.params.id }, function (err, honeyBadger) {
            if (err) {
                console.log("Unable to find the particular honey badger");
            } else {
                res.render('badger', { honeyBadger });
            }
        })
    },
    edit: function(req, res){
        HoneyBadger.find({ _id: req.params.id }, function (err, honeyBadger) {
            if (err) {
                console.log("Unable to find the particular honey badger");
            } else {
                res.render('editBadger', { honeyBadger: honeyBadger, errors: error_messages });
            }
        })
    },
    update: function(req, res){
        error_messages = [];
        HoneyBadger.update({ _id: req.params.id }, { name: req.body.name, dig_speed: req.body.digSpeed, anger_level: req.body.angerLevel, offspring: req.body.offspring, cares_given: req.body.cares }, function (err) {
            if (err) {
                console.log('error found!')
                console.log(err);
                for (const e in err.errors) {
                    console.log(err.errors[e]);
                    error_messages.push(err.errors[e].message);
                };
                res.redirect('/honeybadgers/edit/' + req.params.id);
            } else {
                res.redirect('/');
            }
        })
    },
    destroy: function(req, res){
        HoneyBadger.remove({ _id: req.params.id }, function (err) {
            if (err) {
                console.log('Error removing badger');
                res.redirect('/');
            } else {
                res.redirect('/');
            }
        })
    }
}