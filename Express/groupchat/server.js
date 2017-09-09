let express = require('express');
let path = require('path');
let app = express();

let server = app.listen(8000, function(){
  console.log('listening on port 8000');
});
let io = require('socket.io').listen(server);

let users = [];
let feed = [];

io.sockets.on('connection', function(socket){
  console.log('Client/socket is connected!');
  console.log('Client/socket id is: ', socket.id);

  socket.on('new_user', function(data){
    users.push({name: data.name, socket: socket.id});

    socket.broadcast.emit('new_user_logged_on', {name: data.name});
    socket.emit('feed', {feed: feed});
  })

  socket.on('new_message', function(data){
    for (i in users){
      if (users[i].socket === socket.id){
        io.emit('message', {message: data.message[0].value, name: users[i].name});
        feed.push('<p class="msg_log">'+users[i].name+': '+data.message[0].value+'</p>')
        break;
      }
    }
  })

  socket.on('push_to_feed', function(data){
    feed.push(data.message);
  })

  socket.on('disconnect', function(){
    console.log(socket.id+' disconnected!');
    for (i in users){
      if (users[i].socket === socket.id){
        io.emit('user_logged_out', {name: users[i].name});
        users.splice(i, 1);
        break;
      }
    }
  })
})

app.use(express.static(path.join(__dirname, '/static')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
})
