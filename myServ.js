let url = require('url');
let http = require('http');
let fs = require('fs');
let serv = http.createServer((req, res) => {
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

setTimeout(() => {
 serv.close();
}, 2500);

let timer = setInterval(() => {
  console.log(process.memoryUsage());
  }, 1000);

  timer.unref();