const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const app = express();

const promise = mongoose.connect('mongodb://localhost/hb_dash', {useMongoClient: true});
mongoose.Promise = global.Promise;

const honeyBadgerSchema = new mongoose.Schema({
  name: {type: String, required: true,  minlength: 2},
  dig_speed: {type: Number, required: true, min: 1},
  anger_level: {type: Number, required: true, min: 10},
  offspring: {type: Number, required: true, min: 0, max: 100},
  cares_given: {type: Number, required: true, max: 0}
}, {timestamps: true});

mongoose.model('honeyBadger', honeyBadgerSchema); // We are setting this Schema in our Model as "honeyBadger"

const HoneyBadger = mongoose.model('honeyBadger'); // We are retrieving this Schema from our Model, named "honeyBadger"

// Log of errors to push to rendered views.
let error_messages = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const routes_setter = require('./server/config/routes.js');
routes_setter(app);


app.listen(port, () => console.log(`Listening on port ${port}`));
