const mongoose = require('mongoose');
const task = require('./../controllers/tasks.js');

module.exports = function(app){
    app.get('/', function(req, res){
        task.index(req, res);
    })

    app.get('/:id', function(req, res){
        task.show(req, res);
    })

    app.post('/:title', function(req, res){
        task.create(req, res);
    })

    app.put('/update/:id', function(req, res){
        task.update(req, res);
    })

    app.delete('/delete/:id', function(req, res){
        task.delete(req, res);
    })
}