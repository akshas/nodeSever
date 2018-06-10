const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

  if(req.url == '/') {
    let file = new fs.ReadStream('index.html', 'utf8');
    sendFile(file, res);
  }
}).listen(3000);

let sendFile = (file, res) => {

  file.pipe(res); // функция "pipe" заменяет весь закоментеированный код внизу

  file.on('error', (err) => {
    res.statusCode = 404;
    res.end("Server error");
    console.error(err);
  });

  file
    .on('open', () => {
      console.log('open');
    })
    .on('close', () => {
      console.log('close');
    });
  res.on('close', () => {
    file.destroy();
  });

  // file.on('readable', write);  // считать файл

  // function write() {
  //   let fileData = file.read();

  //   if (fileData && !res.write(fileData)) { // отправить
  //     file.removeListener('readable', write);

  //     res.once('drain', () => { // опустошить буфер
  //       file.on('readable', write);
  //       write();
  //     });
  //   }
  // }

  // file.on('end', () => {
  //   res.end();
  // });
};