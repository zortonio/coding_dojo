const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const app = express();

const promise = mongoose.connect('mongodb://localhost/quoting_dojo', {useMongoClient: true});
mongoose.Promise = global.Promise;

const QuoteSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 2},
  quote: {type: String, required: true, maxlength: 1000}
}, {timestamps: true});

mongoose.model('Quote', QuoteSchema);

const Quote = mongoose.model('Quote');

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.post('/quotes', function(req, res){
  if(req.body.seeQuotes === ''){
    res.redirect('/quotes');
  } else{
    const quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
      if(err){
        console.log(`Quote/Name invalid, unable to save.`);
        res.render('error', {error: err});
      } else{
        console.log('Successfully added quote!');
        res.redirect('/quotes');
      }
    })
  }
});

app.get('/quotes', function(req, res){
  Quote.find({}, function(err, quotes){
    if(err){
      console.log(`There was an error collection the quotes.`);
      res.render('error', {error: err});
    } else{
      console.log(`Found quotes!`);
      res.render('quotes', {quotes});
    }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));
