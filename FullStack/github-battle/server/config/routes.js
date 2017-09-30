const path = require('path');
const Users = require('./../controllers/users.js');

module.exports = function(app){
    app.post('/players/add', (req, res, next) => {Users.add(req, res)});
    app.get('/players/all', (req, res, next) => {Users.all(req, res)});
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}

