const mongoose = require('mongoose');
const human = require('./../controllers/humans.js');

module.exports = function(app){
    app.get('/', function(req, res){
        human.index(req, res);
    })

    app.get('/new/:name', function(req, res){
        human.create(req, res);
    })

    app.get('/remove/:name', function(req, res){
        human.destroy(req, res);
    })

    app.get('/:name', function(req, res){
        human.show(req, res);
    })
}