var http = require('http');
var url = require('url');
var request = require('./request.js');

var server = new http.Server( request ).listen(4000); 

/**
 * еще один request для сервера
 */
  //   (req, res) => {
  //   let urlParsed = url.parse(req.url, true);
  //   debugger;
  //   // console.log(urlParsed);
  //   if(urlParsed.pathname == '/echo' && urlParsed.query.message) {
  //     // res.setHeader('Cache-control', 'no-cache');
  //     res.end(urlParsed.query.message);
  //     console.log(req.headers);
      
  //   }else{
  //     res.statusCode = 404;
  //     res.end('Lavrov petuh');
  //   }
  // }
  

  // EventEmitter
  // server.on('request', function(req, res) {
  //   console.log(req.url);
    
  //   res.end('Hello, World!');
  // });
  // server.listen(5000);

