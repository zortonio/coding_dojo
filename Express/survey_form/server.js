let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
  response.render('index');
})

app.post('/result', function(request, response){
  response.render('result', {user: request.body})
})

app.listen(8000, function(){
  console.log('Listening on port 8000');
})
