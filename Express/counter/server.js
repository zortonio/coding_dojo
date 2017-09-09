let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'mermaidsarereal'}));

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
  console.log(request.session);
  if ('count' in request.session){
    request.session.count += 1;
  }
  else{
    request.session.count = 1;
  }
  response.render('index', {count: request.session.count});
})

app.post('/plusTwo', function(request, response){
  request.session.count++;
  response.redirect('/');
})

app.post('/reset', function(request, response){
  request.session.count = 0;
  response.redirect('/');
})

app.listen(8000, function(){
  console.log('Listening on port 8000.');
})
