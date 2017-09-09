let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'codingdojorocks'}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//Main Landing Page
app.get('/', function(request, response){
  response.render('index');
})

//Users
app.get('/users', function(request, response){
  let users_array = [
    {name: 'Michael', email: 'michael@codingdojo.com'},
    {name: 'Jay', email: 'jay@codingdojo.com'},
    {name: 'Brendan', email: 'brendan@codingdojo.com'},
    {name: 'Andrew', email: 'andrew@codingdojo.com'}
  ];
  response.render('users', {users: users_array});
})

//Add new User
app.post('/users', function(request, response){
  console.log('POST DATA \n\n', request.body);
  response.redirect('/');
})

app.get('/users/:id', function(req, res){
  console.log('The user id requested is:', req.params.id);
  res.send('You requested the user with id:' + req.params.id);
})

app.listen(8000, function(){
  console.log('listening on port 8000');
})
