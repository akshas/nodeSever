let url = require('url');
let http = require('http');
let fs = require('fs');
http.createServer((req, res) => {
 let urlPars =  url.parse(req.url, true);
  console.log(urlPars.path);
  if ( urlPars.pathname == "/") {
    fs.readFile('index.html', (err, info) => {
      if(err) {
        req.statusCode = 500;
        console.log(err);
        res.end('что-то пошло не так');        
        return;
      };
      res.end(info);
    });
  } else {
    res.end('es gibt einige Probleme');
  }
}).listen(4000);

