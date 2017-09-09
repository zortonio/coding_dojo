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

  let count = 0;

  socket.on('button_clicked', function(){
    count++;
    socket.emit('return_count', {count: count});
  })
});

app.use(express.static(path.join(__dirname, '/static')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});
