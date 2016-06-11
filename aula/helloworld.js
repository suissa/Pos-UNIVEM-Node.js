var http = require('http');
var fs = require('fs');

fs.readFile('hello.html', function(err, data) {
  var hostname = '127.0.0.1';
  var port = 3000;

  var server = http.createServer( function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.write('<h1>MUDEII</h1>');
    res.end(data);
  });

  server.listen(port, hostname, function() {
    console.log('Server running at http://'+hostname+':'+port+'/');
  });
});