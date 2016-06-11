const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Criação do Schema
const jsonSchema = {
  name: String,
  email: String
}
module.exports = new Schema(jsonSchema);

