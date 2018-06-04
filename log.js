let winston = require('winston');

module.exports = (module) => {
  return makeLogger(module.filename);
}

let makeLogger = (path) => {
  if (path.match(/request.js$/)) {
    let transports = [
      new winston.transports.Console({
        timestamp: true,
        colorize: true,
        level: 'info'
      }),
      new winston.transports.File({filename: 'debug.log', level: 'debug'})
    ];
    return new winston.Logger({transports: transports });
  } else {
    return new winston.Logger({
      transports: []
    });
  }
};