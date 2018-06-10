// import { ReadStream, read } from 'fs';

let http = require('http');
let fs = require('fs');

let stream = new fs.ReadStream(`${__dirname}/public/index.html`, 'utf8');
  
stream.on('data', (chunk) => {
  let data = stream.read();
  console.log(chunk);
});

stream.on('end', () => {
  console.log('THE END');
});