let http = require('http');
let url = require('url');

http.createServer((req, res) => {
  let parsed = url.parse(req.url, true);

  if ( parsed.pathname == '/echo' && parsed.query.message) {
    console.log(parsed.pathname);
    res.end(parsed.query.message);
  } else {
    res.end('anything is not ok');
  }
}).listen(3000);