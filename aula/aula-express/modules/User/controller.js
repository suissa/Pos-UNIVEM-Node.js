const Model = require('./model');
const  callback = (err, data, res) => {
  if(err) res.json(err);
  else res.json(data);
};

const Controller = {
  cadastrar: (req, res) => {
    const dados = req.body;
    const _model = new Model(dados);

    _model.save((err, data) => callback(err, data, res));
  },
  listar: (req, res) => {
    const query = {};
    Model.find(query, (err, data) => callback(err, data, res));
  },
  consultar: (req, res) => {
    const query = {_id: req.params.id};
    Model.findOne(query, (err, data) => callback(err, data, res));
  },
  alterar: (req, res) => {
    const query = {_id: req.params.id};
    const mod = req.body;
    Model.update(query, mod, (err, data) => {
      callback(err, data, res);
    });
  },
  remover: (req, res) => {
    const query = {_id: req.params.id};
    Model.remove(query, (err, data) => {
      callback(err, data, res);
    });
  }
};

module.exports = Controller;













