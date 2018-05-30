let url = require('url');
let log = require('winston');

module.exports = (req, res) => {
  let urlParsed = url.parse(req.url, true);
  log.info('Got URL', req.method, req.url);
  debugger;
  if ( req.method == 'GET' && urlParsed.pathname == '/echo' && urlParsed.query.message ) {
    let message = urlParsed.query.message;
    log.info('Echo: ' + message);
    res.end(message);
    return;
  }
  log.error('Unknown url');
  res.statusCode = 404;
  res.end('Not Found');
}