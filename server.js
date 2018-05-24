var http = require('http');
var server = new http.Server(); // EventEmitter
server.listen(5000, '127.0.0.1');
var counter = 0;
server.on('request', function(request, res) {
  res.end('Hello, World!' + ++counter);
});
