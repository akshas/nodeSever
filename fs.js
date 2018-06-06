const fs = require('fs');
let file = 'tstFile.txt';
// fs.appendFile('testFile.txt', 'and fuck you!',(err) => {
//   if(err) {
//     console.error(err);
//   }
// });

    fs.readFile(file, (err,data) => {
      if(err.code == "ENOENT") {
        console.error(err.message);
      } else {

        console.log(data.toString());
      }
    });

    // fs.readFile(file, (err, data) =>{
    //  if(err) {
    //    console.error(err);
    //  }
    //  console.log(data.toString());
    // });