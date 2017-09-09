const mongoose = require('mongoose');
const Task = mongoose.model('task');

module.exports = {
    index: function(req, res){
        Task.find({}, function(err, tasks){
            if(err){
                console.log(`Error retrieving tasks from the database.`);
            } else{
                res.json(tasks);
            }
        })
    },
    show: function(req, res){
        Task.find({_id: req.params.id}, function(err, task){
            if(err){
                console.log(`Error retrieving task from the database.`);
            } else{
                console.log(`Success!`);
                res.json(task);
            }
        })
    },
    create: function(req, res){
        const task = new Task({name: req.params.name});
        task.save(function(err){
            if(err){
                console.log(`Error saving new task.`);
            } else{
                console.log(`Success!`);
                res.redirect('/');
            }
        })
    },
    update: function(req, res){
        Task.update({_id: req.params.id}, function(err){
            if(err){
                console.log(`Error updating task.`);
            } else{
                console.log(`Success!`);
                res.redirect('/');
            }
        })
    },
    delete: function(req, res){
        Task.remove({_id: req.params.id}, function(err){
            if(err){
                console.log(`Error deleting task.`);
            } else{
                console.log(`Success!`);
                res.redirect('/');
            }
        })
    }
}