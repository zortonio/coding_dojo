let express = require('express');
let path = require('path');

let app = express();
let server = app.listen(8000, function(){
  console.log('listening on port 8000');
})
let io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  console.log('Client/socket is connected!');
  console.log('Client/socket id is: ', socket.id);

  socket.on('button_clicked', function(data){
    console.log('Someone clicked a button! Reason: ', data.reason);
    socket.emit('server_response', {response: 'sockets are the best!'});
  })
})

app.use(express.static(path.join(__dirname, '/static')));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
})
