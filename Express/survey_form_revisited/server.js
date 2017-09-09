let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let app = express();
let server = app.listen(8000, function(){
  console.log('listening on port 8000');
})
let io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  console.log('Client/socket is connected!');
  console.log('Client/socket id is: ', socket.id);

  socket.on('posting_form', function(data){
    let updated_list = {};

    for(i in data){
      if (data[i].name === 'name'){
        updated_list.name = data[i].value;
      }
      else if (data[i].name === 'location'){
        updated_list.location = data[i].value;
      }
      else if (data[i].name === 'language'){
        updated_list.language = data[i].value;
      }
      else if (data[i].name === 'comment'){
        updated_list.comment = data[i].value;
      }
    }

    socket.emit('updated_message', {message: "You emitted the following information to the server: " + JSON.stringify(updated_list)})
    socket.emit('random_number', {random: Math.floor(Math.random() * (1000 - 1 + 1) + 1)});
  })
});

app.use(express.static(path.join(__dirname, '/static')));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.post('/', function(req, res){
  res.render('index');
});
