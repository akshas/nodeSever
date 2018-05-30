const fs = require('fs');
const http = require('http');

const server = new http.Server((req, res) => {
  // fs.readFile('text.txt', (err, data) => {
  //   if(err) throw err;
  //   console.log(res.end(data));
  // });
  const stream = fs.createReadStream('text.txt');
  stream.pipe(res);
}).listen(5000);


