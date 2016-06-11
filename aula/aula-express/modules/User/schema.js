const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Criação do Schema
const jsonSchema = {
  name: String,
  email: String
}
const alunoSchema = new Schema(jsonSchema);

module.exports = mongoose.model('Aluno', alunoSchema);
