const mongoose = require('mongoose');
const honeyBadger = require('./../controllers/honeyBadgers.js');

module.exports = function(app){
    // Renders the hone page listing all honey badgers currently in the database.
    app.get('/', function (req, res) {
        honeyBadger.index(req, res);
    });

    // Renders a page to add a new honey badger to the database.
    app.get('/honeybadgers/new', function (req, res) {
        honeyBadger.new(req, res);
    });

    // Validation
    app.post('/honeybadgers', function (req, res) {
        honeyBadger.create(req, res);
    });

    // Render a page that displays stats for a chosen honey badger
    app.get('/honeybadgers/:id', function (req, res) {
        honeyBadger.show(req, res);
    });

    // Render a page for users to edit the stats of a specified honey badger
    app.get('/honeybadgers/edit/:id', function (req, res) {
       honeyBadger.edit(req, res);
    });

    // Update the specified honey badger using the edit form information.
    app.post('/honeybadgers/:id', function (req, res) {
        honeyBadger.update(req, res);
    });

    app.get('/honeybadgers/destroy/:id', function (req, res) {
       honeyBadger.destroy(req, res);
    })
}