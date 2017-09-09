let http = require('http');
let fs = require('fs');
let server = http.createServer(function(request, response){
  console.log('Client Request URL:',request.url);
  if (request.url === '/'){
    fs.readFile('index.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === '/ninjas'){
    fs.readFile('ninjas.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === '/dojos/new'){
    fs.readFile('dojos.html', 'utf8', function(erros, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else {
    response.writeHead(404);
    response.end('The URL requested is not available');
  }
});
server.listen(6789);
console.log('Running in localhost at port 6789');
