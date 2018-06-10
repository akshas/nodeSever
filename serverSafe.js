// запрос файла из определенной папки (public)
let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');


let ROOT = __dirname + '/public';
http.createServer((req, res) => {
  if( !checkUrl(req) ) {
    res.statCode = 403;
    res.end('secret code');
    return;
  }
  sendFileSafe(url.parse(req.url).pathname, res);
}).listen(5000);

let checkUrl = (req) => {
  let query = url.parse(req.url, true).query;
  console.log(query);
  
  return url.parse(req.url, true).query.secret == 'o_O';
};

let sendFileSafe  = (filePath, res) => {

  // декодировать
  try {
    filePath = decodeURIComponent(filePath);
  } catch (err) {
   res.statusCode = 400; 
   res.end('bad request');
   return;
  }

  // нулевой байт
  if( ~filePath.indexOf('\0')) {
   res.statusCode = 400; 
   res.end('bad request');
   return;
  }
  // проверить рут и нормализовать путь
  filePath = path.normalize(path.join(ROOT,filePath));
  if (filePath.indexOf(ROOT) != 0) {
    res.statusCode = 400;
    res.end('vam suda nelzja');
    return;
  }
  // проверить существует ли путь и является ли он файлом
  
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 400;
      res.end('this is not a file');
      return;
    }
  });

  
  fileSend(filePath, res);
};

let fileSend = (filePath, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    console.log(filePath.indexOf(ROOT));
    
    res.end(data);
  });
};
