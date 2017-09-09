const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();

const promise = mongoose.connect('mongodb://localhost/message_board', {useMongoClient: true});
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

// Create database Schemas and Associations
// const userSchema = new mongoose.Schema({
//   name: {type: String, required: true, minLength: 2},
//   posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
//   comments: [{type: Schema.Types.ObjectId}]
// }, {timestamps: true});
// mongoose.model('User', userSchema);
// const User = mongoose.model('User');

const postSchema = new mongoose.Schema({
  // _user: {type: Schema.Types.ObjectId, ref: 'User'},
  name: {type: String, required: true, minLength: 2},
  text: {type: String, required: true, maxLength: 1000},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});
mongoose.model('Post', postSchema);
const Post = mongoose.model('Post');

const commentSchema = new mongoose.Schema({
  // _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
  name: {type: String, required: true, minLength: 2},
  text: {type: String, required: true, maxLength: 1000}
}, {timestamps: true});
mongoose.model('Comment', commentSchema);
const Comment = mongoose.model('Comment');

app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'mermaidsAreReal'}));
app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let error_messages = [];

app.get('/', function(req, res){
  Post.find({}).populate('comments').exec(function(err, posts){
    if(err){
      console.log(`Error retrieving posts`);
    } else{
      res.render('index', {errors: error_messages, posts: posts});
    }
  })
});

app.post('/postMessage', function(req, res){
  error_messages = [];
  const post = new Post({name: req.body.name, text: req.body.message});
  post.save(function(err){
    if(err){
      for(e in err.errors){
        error_messages.push(err.errors[e].message);
      }
      console.log(`Error posting message`);
      res.redirect('/');
    } else{
      console.log(`Message Posted!`)
      res.redirect('/');
    }
  })
});

app.post('/postComment/:id', function(req, res){
  error_messages = [];
  Post.find({_id: req.params.id}, function(err, post){
    if(err){
      console.log(`Error retrieving post from database.`);
      res.redirect('/');
    } else{
      const comment = new Comment({name: req.body.name, text: req.body.comment, _post: post._id});

      comment.save(function(err){
        if(err){
          console.log(`Error saving comment to the db.`);
          res.redirect('/');
        } else{
          post[0].comments.push(comment);
          post[0].save(function(err){
            if(err){
              console.log(`Error saving comment to existing post.`)
              res.redirect('/');
            } else{
              res.redirect('/');
            }
          })
        }
      })
    }
  })
})


app.listen(port, () => console.log(`Listening on port ${port}`));
