


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

const  callback = (err, data) => {
  if(err) console.log('ERROOOO: ', err);
  else console.log('Retorno: ', data.result);
};

const Controller = {
  cadastrar: () => {
    const alunoDados = {name: "João", email: "joao@gmail.com"}
    const alunoModel = new Model(alunoDados);

    alunoModel.save(callback);
  }
};

// const query = {name: 'Jean Carlo Nascimento'};
// Model.remove(query, callback);
// const query = { name: 'Suissa'};
// const mod = {name: 'Jean Carlo Nascimento'};
// Model.update(query, mod, (err, data) => {
//   if(err) console.log('ERROOOO: ', err);
//   else console.log('ALTERADO: ', data);
// });

// const query = {};
// Model.findOne(query, );














