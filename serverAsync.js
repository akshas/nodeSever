let http = require('http');
let fs = require('fs');

let info;
http.createServer((req, res) => {as`s ss`
  if (req.url = '/') {
    fs.readFile('index.html', (err, info) => {
      if(err) {
        console.error(err);
        res.statusCode = 500;
        res.end('нет файла');
        return;
      }
      res.end(info);

    });
  } else {
    res.statusCode = 404;
    res.end('url not found');
  }
}).listen(5000);