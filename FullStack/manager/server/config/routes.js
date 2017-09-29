const path = require('path');
const players = require('./../controllers/players.js');

module.exports = function(app){
    app.post('/players/new', (req, res, next) => {players.create(req, res)});
    app.get('/players/all', (req, res, next) => {players.all(req, res)});
    app.delete('/players/:id', (req, res, next) => {players.remove(req, res)});
    app.put('/players/game/status/:id', (req, res, next) => {players.update(req, res)});
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}