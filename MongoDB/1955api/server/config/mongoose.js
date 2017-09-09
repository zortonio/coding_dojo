const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://localhost/human', {useMongoClient: true});
mongoose.Promise = global.Promise;

const model_path = path.join(__dirname, './../models');

fs.readdirSync(model_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(model_path + '/' + file);
    }
});