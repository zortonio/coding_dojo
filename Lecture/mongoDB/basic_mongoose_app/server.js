const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const path = require('path');
const mongoose = require('mongoose');
const app = express();

const promise = mongoose.connect('mongodb://localhost/basic_mongoose', {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
})
mongoose.model('User', UserSchema);

const User = mongoose.model('User');

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  User.find({}, function(err, users){
    if(err){
      console.log(`There was an error collecting the users.`);
    } else{
      console.log(`Found users!`);
      res.render('index', {users});
    }
  })
});

app.post('/users', function(req, res){
  console.log('POST DATA:', req.body);
  const user = new User({name: req.body.name, age: req.body.age});
  user.save(function(err){
    if(err){
      console.log('Something went wrong');
    } else {
      console.log('Successfully added a user!');
      res.redirect('/');
    }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));
