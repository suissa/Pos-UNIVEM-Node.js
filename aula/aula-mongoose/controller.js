


const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/pos-univem';

mongoose.connect(dbURI);

mongoose.connection.on('  ', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

const Schema = mongoose.Schema;
// Criação do Schema
const jsonSchema = {
  name: String,
  email: String,
}
const alunoSchema = new Schema(jsonSchema);

const Model = mongoose.model('Aluno', alunoSchema);

const  callback = (err, data, res) => {
  if(err) res.end(JSON.stringify(err));
  else res.end(JSON.stringify(data));
};

const Controller = {
  cadastrar: (req, res) => {
    const alunoDados = {name: "João", email: "joao@gmail.com"}
    const alunoModel = new Model(alunoDados);

    alunoModel.save((err, data) => callback(err, data, res));
  },
  listar: (req, res) => {
    const query = {};
    Model.find(query, (err, data) => callback(err, data, res));
  },
  alterar: (req, res) => {
    const query = {name: "João"};
    const mod = {email: 'Joao@xvideos.com'};
    Model.update(query, mod, (err, data) => {
      callback(err, data, res);
    });
  },
  remover: (req, res) => {
    const query = {name: "João"};
    Model.remove(query, (err, data) => {
      callback(err, data, res);
    });
  }
};

module.exports = Controller;

// const query = {name: 'Jean Carlo Nascimento'};
// Model.remove(query, callback);

// const query = {};
// Model.findOne(query, );














