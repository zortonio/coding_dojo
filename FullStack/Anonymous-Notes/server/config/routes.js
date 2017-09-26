const notes = require('../controllers/notes.js');
module.exports = function(app){
    app.post('/note', (req, res, next) =>{
        notes.create(req, res);
    }),
    app.get('/notes', (req, res, next) =>{
        notes.all(req, res);
    })
}