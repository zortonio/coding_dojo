const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const users = [
  {
    name: 'Shawn',
    email: 'shawn@example.com'
  },
  {
    name: 'Person',
    email: 'ps@email.com'
  }
];

app.get('/', function(req, res){
  res.render('index');
});

app.post('/users', function(req, res){
  users.push(req.body);
  res.render('result', {users});
});

app.listen(port, () => console.log(`listening on port ${port}`));
