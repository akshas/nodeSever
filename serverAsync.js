let http = require('http');
let fs = require('fs');

let info;
http.createServer((req, res) => {
  if (req.url = '/') {
    fs.readFile('index.html', (err, info) => {
      if(err) {
        console.error(err);
        res.statusCode = 500;
        res.end('На сервере произошла ошибка');
        return;
      }
      res.end(info);

    });
  } else {
    res.statusCode = 404;
    res.end('url not found');
  }
}).listen(5000);