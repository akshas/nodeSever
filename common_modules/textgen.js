let fs = require('fs');
const file = fs.createWriteStream('text.txt');

for(let i = 0; i < 1000; i++) {
  file.write(' Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sed consequuntur tempore id ? Eveniet ratione iure beatae voluptates magni sed');
}
file.end();