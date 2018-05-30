const fs = require('fs');

fs.readdir(__dirname, (err, dir) => {
  if(err) throw error;
let[git, serv] = dir;
console.log(git);

});
console.log('asdf');