const express = require('express');
const router = express.Router();
const Controller = require('./controller');

router.get('/', function(req, res) {
  Controller.listar(req, res);
});

router.get('/:id', function(req, res) {
  Controller.consultar(req, res);
});

router.put('/:id', function(req, res) {
  Controller.alterar(req, res);
});
router.post('/', function(req, res) {
  Controller.cadastrar(req, res);
});

module.exports = router;
