var http = require('http');
const Controller = require('./controller');

var hostname = '127.0.0.1';
var port = 3000;
var SUCCESS = {
        version: '1.0'
      , name: 'Be MEAN'
      , returned_at: Date.now()
      };
var SUCCESSv2 = {
        version: '2.0'
      , name: 'Be MEAN'
      , returned_at: Date.now()
      };
var SUCCESSv3 = {
        version: '3.0'
      , name: 'Be MEAN'
      , returned_at: Date.now()
      };
var ERROR = {
        message: "Não encontrado!"
      };

var server = http.createServer( function(req, res) {

  switch (req.url) {
    case '/api/cadastrar':
      res.writeHeader(200, {'Content-Type': 'application/json'});
      Controller.cadastrar(req, res);
      break;
    case '/api/listar':
      res.writeHeader(200, {'Content-Type': 'application/json'});
      Controller.listar(req, res);
      break;
    case '/api/alterar':
      res.writeHeader(200, {'Content-Type': 'application/json'});
      Controller.alterar(req, res);
      break;
    case '/api/remover':
      res.writeHeader(200, {'Content-Type': 'application/json'});
      Controller.remover(req, res);
      break;
    case '/api/v1':
      res.writeHeader(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(SUCCESS));
      break;
    case '/api/v2':
      res.writeHeader(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(SUCCESSv2));
      break;
    case '/api/v3':
      res.writeHeader(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(SUCCESSv3));
      break;
    default:
      res.writeHeader(404, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(ERROR));
      break;
  }

});

server.listen(port, hostname, function() {
  console.log('Server running at http://'+hostname+':'+port+'/');
});


